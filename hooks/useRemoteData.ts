import { getContracts } from "./../utils/ethersContract"
import { useCallback, useState } from "react"
import { useAppDispatch, useAppSelector } from "redux/hooks"
import { WalletStateActions } from "redux/slices/wallet"
import { decimalFromWei, decimalToWeiStr, fromWei } from "utils/math"
import Big from "big.js"
import { fetchQuery } from "helpers/subgraph"
import queries from "utils/subgraph/queries"
import { httpUri } from "common/subgraph"
import { ProtocolStateActions } from "redux/slices/protocol"
import { DateTime } from "luxon"
import { PositionStateActions } from "redux/slices/position"
import protocol, { supportedAmms } from "protocol"
import { AmmName } from "common/types"

const useRemoteData = () => {
  const { account, signer } = useAppSelector((state) => state.WalletState)
  const { currentAmm, generalData } = useAppSelector((state) => state.ProtocolState)
  const { fundingPeriod, maintenanceMarginRatio } = generalData
  const dispatch = useAppDispatch()
  const [skeleton, setSkeleton] = useState(true)
  const contracts = getContracts(signer)

  const getBalances = useCallback(async () => {
    if (signer && account) {
      try {
        const balance = fromWei(await signer.getBalance())
        const decimals = await contracts.usdc.decimals()
        const usdcBalance = fromWei(await contracts.usdc.balanceOf(account), +decimals)
        dispatch(WalletStateActions.setBalances({ balance, usdcBalance }))

        /// TODO: check websocket later
        // const fromOptions = {
        //   filter: {
        //     from: account
        //   }
        // }
        // const toOptions = {
        //   filter: {
        //     to: account
        //   }
        // }

        // // You can listen to connected, changed, error events but we are just interested in the data
        // websocket.usdc.events.Transfer(fromOptions).on("data", async (_event) => {
        //   const usdcBalance = fromWei(await fallback.usdc.balanceOf(account), +decimals)
        //   dispatch(WalletStateActions.setBalances({ balance: undefined, usdcBalance }))
        // })
        // websocket.usdc.events.Transfer(toOptions).on("data", async (_event) => {
        //   const usdcBalance = fromWei(await fallback.usdc.balanceOf(account), +decimals)
        //   dispatch(WalletStateActions.setBalances({ balance: undefined, usdcBalance }))
        // })
      } catch (error) {
        console.error("An error occurred in getBalances():", error)
        dispatch(WalletStateActions.setBalances({ balance: Big(0), usdcBalance: Big(0) }))
      }
    } else {
      dispatch(WalletStateActions.setBalances({ balance: Big(0), usdcBalance: Big(0) }))
    }
  }, [account, dispatch])

  const getVolume = useCallback(async () => {
    try {
      const timestamp = String(Math.floor(Date.now() / 1000) - 86400)
      const result = await fetchQuery(
        queries.volumeQuery,
        {
          timestamp,
          ammAddr: contracts.amms[currentAmm]!.address
        },
        httpUri
      )
      let volume = Big(0)
      result.positionChangedEvents.map((event: any) => (volume = volume.add(fromWei(event.positionNotional))))
      return volume
    } catch (error) {
      console.error("An error occurred in getVolume():", error)
    }
    return Big(0)
  }, [currentAmm])

  const getAmmGeneralData = useCallback(async () => {
    try {
      if (signer) {
        const amm = contracts.amms[currentAmm]!
        const spreadRatio = fromWei(await amm.spreadRatio())
        const tollRatio = fromWei(await amm.tollRatio())
        const maxHolding = decimalFromWei(await amm.getMaxHoldingBaseAsset())
        const maintenanceMarginRatio = fromWei(await contracts.clearingHouse.maintenanceMarginRatio())
        const fundingPeriod = Big((await amm.fundingPeriod()).toString())
        dispatch(
          ProtocolStateActions.setGeneralData({
            spreadRatio,
            tollRatio,
            maintenanceMarginRatio,
            maxHolding,
            fundingPeriod
          })
        )
      }
    } catch (error) {
      console.error("An error occurred in getAmmGeneralData():", error)
    }
  }, [currentAmm, dispatch, signer])

  const estimatedFundingRate = useCallback(async () => {
    try {
      const interval = DateTime.local().minute * 60
      if (interval) {
        const amm = contracts.amms[currentAmm]!
        const markTwapPrice = decimalFromWei(await amm.getTwapPrice(interval))
        const indexTwapPrice = decimalFromWei(await amm.getUnderlyingTwapPrice(interval))
        const oneDayInSec = 60 * 60 * 24
        const premium = markTwapPrice.minus(indexTwapPrice)
        const premiumFraction = premium.mul(fundingPeriod).div(oneDayInSec)
        return premiumFraction.div(indexTwapPrice).mul(100)
      }
    } catch (error) {
      console.error("An error occurred in estimatedFundingRate():", error)
    }
    return Big(0)
  }, [currentAmm, fundingPeriod])

  const getAmmVariableData = useCallback(async () => {
    try {
      if (!skeleton) setSkeleton(true)
      const amm = contracts.amms[currentAmm]!
      const markPrice = decimalFromWei(await amm.getSpotPrice())
      const indexPrice = decimalFromWei(await amm.getUnderlyingPrice())
      const fundingRate = await estimatedFundingRate()
      const quoteReserve = fromWei(await amm.quoteAssetReserve())
      const baseReserve = fromWei(await amm.baseAssetReserve())
      const volume = await getVolume()
      dispatch(
        ProtocolStateActions.setVariableData({
          markPrice,
          indexPrice,
          fundingRate,
          quoteReserve,
          baseReserve,
          volume
        })
      )
      setSkeleton(false)
    } catch (e) {
      console.error(e)
    }
    // @yash: dont add skeleton to deps array. it will cause infinite loop[]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAmm, dispatch, estimatedFundingRate, getVolume])

  const resetPositionState = useCallback(
    (ammName: AmmName) => {
      dispatch(
        PositionStateActions.setPosition({
          asset: ammName,
          position: {
            asset: ammName,
            side: "long",
            size: Big(0),
            leverage: Big(0),
            entryPrice: Big(0),
            liquidationPrice: Big(0),
            margin: Big(0),
            marginRatio: Big(0),
            pnl: Big(0)
          }
        })
      )
    },
    [dispatch]
  )

  const getPositionInfo = useCallback(async () => {
    try {
      if (account) {
        for (const ammName of supportedAmms) {
          const position = (await contracts.clearingHouseViewer.getPersonalPositionWithFundingPayment(
            protocol.amms[ammName],
            account
          )) as any
          const size = decimalFromWei(position.size)
          if (!size.abs().gt(0)) {
            resetPositionState(ammName)
            continue
          }
          const margin = decimalFromWei(position.margin)
          const openNotional = decimalFromWei(position.openNotional)
          const pnl = decimalFromWei(
            await contracts.clearingHouseViewer.getUnrealizedPnl(protocol.amms[ammName], account, 0)
          )
          const entryPrice = openNotional.div(size).abs()
          const exitAmountOut = decimalFromWei(
            await contracts.amms[ammName]!.getOutputPrice(size.gt(0) ? 0 : 1, decimalToWeiStr(size.abs()))
          )
          const markPrice = decimalFromWei(await contracts.amms[ammName]!.getSpotPrice())
          const markAmountOut = markPrice.mul(size.abs())
          const leverage = openNotional.div(margin)
          const reverseLeverage = Big(1).div(leverage)
          const marginRatio = Big(100).div(leverage)
          const closePosSlippage = exitAmountOut.minus(markAmountOut).div(markAmountOut)
          const liquidationPrice = size.gt(0)
            ? entryPrice.mul(
                Big(1).minus(reverseLeverage).minus(closePosSlippage).plus(maintenanceMarginRatio)
              )
            : entryPrice.mul(
                Big(1).plus(reverseLeverage).minus(closePosSlippage).minus(maintenanceMarginRatio)
              )
          dispatch(
            PositionStateActions.setPosition({
              asset: ammName,
              position: {
                asset: ammName,
                side: size.gt(0) ? "long" : "short",
                size: size.abs(),
                leverage,
                entryPrice,
                liquidationPrice,
                margin,
                marginRatio,
                pnl
              }
            })
          )
        }
      } else {
        supportedAmms.map(resetPositionState)
      }
    } catch (e) {
      console.error("getPositionInfo", e)
    }
  }, [account, dispatch, maintenanceMarginRatio, resetPositionState])

  return { getBalances, getAmmGeneralData, getAmmVariableData, getPositionInfo, skeleton }
}

export default useRemoteData

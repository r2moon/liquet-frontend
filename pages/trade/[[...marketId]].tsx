import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import TradeHistory from "components/TradeHistory"
import io from "socket.io-client"
import { Flex, Box, Text, Skeleton, Tooltip } from "@chakra-ui/react"
import { ResolutionString } from "public/static/charting_library/charting_library"
import { format } from "../../utils/math"
import { PositionRow, FundingPaymentRow, TradesRow } from "components/rows"
import Panel from "components/Panel"
import { useAppDispatch, useAppSelector } from "redux/hooks"
import protocol, { supportedAmms } from "protocol"
import { AmmName, Tab } from "common/types"
import useRemoteData from "hooks/useRemoteData"
import { ProtocolStateActions } from "redux/slices/protocol"
import { useRouter } from "next/router"

const TVChart = dynamic(() => import("../../components/TVChartContainer"), {
  ssr: false
})

const Home = () => {
  const dispatch = useAppDispatch()
  const { currentAmm, variableData } = useAppSelector((state) => state.ProtocolState)
  const { markPrice, indexPrice, fundingRate, volume } = variableData
  const [tab, setTab] = useState(Tab.POSITION_ROW)

  const { getBalances, getAmmGeneralData, getAmmVariableData, getPositionInfo, skeleton } = useRemoteData()

  useEffect(() => {
    const socket = io("wss://position-change-notifier.herokuapp.com")
    const cb = async () => {
      try {
        await new Promise((r) => setTimeout(r, 1000))
        await getPositionInfo()
        await getBalances()
        await getAmmVariableData()
        console.log("position updated")
      } catch (e) {
        console.error(e)
      }
    }
    socket.on("PositionChanged", cb)
    socket.on("MarginChanged", cb)
    return () => socket.disconnect() as any
  }, [getAmmVariableData, getPositionInfo, getBalances])

  useEffect(() => {
    localStorage.removeItem("amm")
    localStorage.setItem("amm", currentAmm)
  }, [currentAmm])

  // on mount
  useEffect(() => {
    getAmmGeneralData()
  }, [getAmmGeneralData])
  useEffect(() => {
    getAmmVariableData()
  }, [getAmmVariableData])
  useEffect(() => {
    getPositionInfo()
  }, [getPositionInfo])

  const router = useRouter()
  const { marketId }: { marketId?: string[] } = router.query

  useEffect(() => {
    if (!router.isReady) return
    if (marketId && marketId.length && supportedAmms.includes(marketId[0].toUpperCase() as AmmName)) {
      dispatch(ProtocolStateActions.setCurrentAmm(marketId[0].toUpperCase() as AmmName))
    } else {
      router.push(`/trade/${currentAmm}`)
    }
  }, [marketId, dispatch, router, currentAmm])

  return (
    <div className="ms-grid">
      <div className="ms-grid__item ms-grid__item--panel ms-block">
        <Panel />
      </div>
      <div className="ms-grid__item ms-grid__item--chart ms-block ms-chart">
        {/* <TradingChart token={selectedToken + "USDC"} /> */}
        <TVChart
          symbol={protocol.amms[currentAmm]}
          interval={"60" as ResolutionString}
          containerId={"tv_chart_container"}
          libraryPath={"/static/charting_library/"}
          chartsStorageUrl={"https://saveload.tradingview.com"}
          chartsStorageApiVersion={"1.1"}
          clientId={"perp.matrixswap.com"}
          userId={"public_user_id"}
          fullscreen={false}
          autosize={true}
          studiesOverrides={{}}
          selectedToken={currentAmm}
        />
      </div>
      <div className="ms-grid__item ms-grid__item--positions ms-block ms-block ml-tutorial-highlight-7">
        <Flex className="ms-block__header">
          <Box
            className={`ms-block__header__tab${
              tab === Tab.POSITION_ROW ? ` ms-block__header__tab--active` : ``
            }`}
            onClick={() => setTab(Tab.POSITION_ROW)}
          >
            <Text>Positions</Text>
          </Box>
          <Box
            className={`ms-block__header__tab${
              tab === Tab.TRADES_ROW ? ` ms-block__header__tab--active` : ``
            }`}
            onClick={() => setTab(Tab.TRADES_ROW)}
          >
            <Text>Trade History</Text>
          </Box>
          <Box
            className={`ms-block__header__tab${
              tab === Tab.FUNDING_ROW ? ` ms-block__header__tab--active` : ``
            }`}
            onClick={() => setTab(Tab.FUNDING_ROW)}
          >
            <Text>Funding Payment</Text>
          </Box>
        </Flex>
        <PositionRow tab={tab} />
        <TradesRow tab={tab} />
        <FundingPaymentRow tab={tab} />
      </div>
      <div className="ms-grid__item ms-grid__item--market ms-block ms-block--no-scroll">
        <Box className="ms-block__header">
          <Text className="ms-block__header__title">Market Info</Text>
        </Box>
        <Box m="0.8rem 0">
          <Flex p="0.1rem 2rem" flexDirection="row" justifyContent="space-between">
            <Text opacity="0.5">Mark Price</Text>
            <Skeleton isLoaded={!skeleton} width={skeleton ? "9rem" : ""} height={skeleton ? "1rem" : ""}>
              <Text>{format(markPrice)} USDC</Text>
            </Skeleton>
          </Flex>

          <Flex p="0.1rem 2rem" flexDirection="row" justifyContent="space-between">
            <Text opacity="0.5">Index Price</Text>
            <Skeleton isLoaded={!skeleton} width={skeleton ? "9rem" : ""} height={skeleton ? "1rem" : ""}>
              <Text>{format(indexPrice)} USDC</Text>
            </Skeleton>
          </Flex>
          <Flex p="0.1rem 2rem" flexDirection="row" justifyContent="space-between">
            <Tooltip label="longs pay shorts if positive and vice-versa" placement="top" rounded="lg">
              <Text opacity="0.5" textDecoration="underline" textUnderlineOffset="2px">
                Est. Funding
              </Text>
            </Tooltip>
            <Skeleton isLoaded={!skeleton} width={skeleton ? "9rem" : ""} height={skeleton ? "1rem" : ""}>
              <Text>{format(fundingRate, 4)} %</Text>
            </Skeleton>
          </Flex>
          <Flex p="0.1rem 2rem" flexDirection="row" justifyContent="space-between">
            <Tooltip
              label={`based on current funding rate, this is the APR if a ${
                fundingRate.gt(0) ? "short" : "long"
              } position is held`}
              placement="top"
              rounded="lg"
            >
              <Text opacity="0.5" textDecoration="underline" textUnderlineOffset="2px">
                Est. {`${fundingRate.gt(0) ? "Short" : "Long"}`} APR
              </Text>
            </Tooltip>
            <Skeleton isLoaded={!skeleton} width={skeleton ? "9rem" : ""} height={skeleton ? "1rem" : ""}>
              <Text color="#40EF49">{format(fundingRate.mul(24).mul(365), 4)} %</Text>
            </Skeleton>
          </Flex>
          <Flex p="0.1rem 2rem" flexDirection="row" justifyContent="space-between">
            <Text opacity="0.5">24h Volume</Text>
            <Skeleton isLoaded={!skeleton} width={skeleton ? "9rem" : ""} height={skeleton ? "1rem" : ""}>
              <Text>{format(volume)} USDC</Text>
            </Skeleton>
          </Flex>
        </Box>
        <Box className="ms-table">
          <Flex className="ms-table__header" flexDirection="row">
            <Text w="30%" textAlign="center">
              Size
            </Text>
            <Text w="30%" textAlign="center">
              Price
            </Text>
            <Text w="40%" textAlign="center">
              Time
            </Text>
          </Flex>
          <TradeHistory />
        </Box>
      </div>
    </div>
  )
}

export default Home

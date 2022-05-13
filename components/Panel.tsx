import { useCallback, useEffect, useMemo, useState } from "react"
import protocol, { supportedAmms } from "protocol"
import { BigNumber, constants } from "ethers"
import Slippage from "../components/Slippage"
import {
  Flex,
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  InputRightAddon,
  InputGroup,
  InputRightElement,
  Input,
  useDisclosure,
  Alert,
  AlertIcon,
  Skeleton
} from "@chakra-ui/react"
import { TriangleDownIcon } from "@chakra-ui/icons"
import { fromWei, format, decimalFromWei, truncate, toWeiDecimal } from "../utils/math"
import { Direction, Loading, SlippageType, Transaction, TransactionSummary, Field } from "common/types"
import Big from "big.js"
import OpenPositionModal from "./modals/OpenPosition"
import { useAppSelector } from "redux/hooks"
import { INPUT_REGEX } from "common"
import { useRouter } from "next/router"
import { getContracts } from "utils/ethersContract"

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") // $& means the whole matched string
}

export function tryParseAmount(value?: string): Big | undefined {
  if (!value) {
    return undefined
  }
  try {
    if (new Big(value).toString() !== "0") return new Big(value)
  } catch (error) {
    console.debug(`Failed to parse input amount: "${value}"`, error)
  }
  return undefined
}

const Panel = () => {
  const positions = useAppSelector((state) => state.PositionState)
  const { account, usdcBalance, chainId, signer } = useAppSelector((state) => state.WalletState)
  const { currentAmm, generalData, variableData } = useAppSelector((state) => state.ProtocolState)
  const { quoteReserve, baseReserve, markPrice } = variableData
  const { maxHolding, spreadRatio, tollRatio, maintenanceMarginRatio } = generalData
  const [direction, setDirection] = useState(Direction.ADD_TO_AMM)
  const [slippage, setSlippage] = useState<SlippageType>({ type: 1, val: "0.5" })
  const [loading, setLoading] = useState(Loading.FALSE)
  const [openPositionTx, setOpenPositionTx] = useState<Transaction>({} as Transaction)
  const [leverage, setLeverage] = useState(1)
  const [approved, setApproved] = useState(false)
  const [timer, setTimer] = useState(0)
  const [skeleton, setSkeleton] = useState(false)
  const [prohibited, setProhibited] = useState("")
  const [transactionSummary, setTransactionSummary] = useState<TransactionSummary>({
    entryPrice: Big(0),
    priceImpact: Big(0),
    fee: Big(0),
    totalCost: Big(0),
    liquidationPrice: Big(0)
  })
  const { isOpen, onOpen, onClose } = useDisclosure()

  const contracts = getContracts(signer)

  const timedInput = (...computations: (() => void)[]) => {
    if (!skeleton) setSkeleton(true)
    clearTimeout(timer)
    const x = window.setTimeout(async () => {
      await Promise.all(computations.map((computation) => computation()))
      setSkeleton(false)
    }, 700)
    setTimer(x)
  }

  const onFieldInput = useCallback(
    (field: Field) => (value: string) => {
      if (value === "" || INPUT_REGEX.test(escapeRegExp(value))) {
        setState({ independentField: field, typedValue: value })
      }
    },
    []
  )

  useEffect(() => {
    onFieldInput(Field.Collateral)("")
  }, [onFieldInput, currentAmm, direction])

  const [{ typedValue, independentField }, setState] = useState<{
    typedValue: string
    independentField: Field
  }>({
    typedValue: "",
    independentField: Field.Collateral
  })

  const calculateDependentAmount = useCallback(
    (field: Field, amount: Big | undefined) => {
      if (!amount || !markPrice.gt(0)) return undefined
      let otherAmount
      if (field === Field.Amount) {
        otherAmount = Big(amount).mul(leverage).div(markPrice)
      } else {
        otherAmount = Big(amount).div(leverage).mul(markPrice)
      }
      return otherAmount
    },
    [leverage, markPrice]
  )

  const dependentField = independentField === Field.Collateral ? Field.Amount : Field.Collateral
  const parsedAmounts = useMemo(
    () => ({
      [independentField]: tryParseAmount(typedValue),
      [dependentField]: calculateDependentAmount(dependentField, tryParseAmount(typedValue))
    }),
    [typedValue, independentField, dependentField, calculateDependentAmount]
  )

  const formattedAmounts = {
    [independentField]: typedValue,
    [dependentField]: truncate(parsedAmounts[dependentField]?.toFixed(10) ?? "")
  }

  const enoughBalance = useCallback(() => {
    return Big(usdcBalance).gte(transactionSummary.totalCost)
  }, [transactionSummary.totalCost, usdcBalance])

  const maxHoldingCheck = useCallback(() => {
    if (maxHolding.eq(0)) {
      return false
    }
    const baseAmount = parsedAmounts[Field.Amount]
    if (baseAmount) {
      const { size } = positions[currentAmm]!
      const newAmount = Big(baseAmount).add(size.abs())
      return newAmount.gt(maxHolding)
    }
  }, [parsedAmounts, currentAmm, maxHolding, positions])

  useEffect(() => {
    if (account) {
      if (!enoughBalance()) {
        setProhibited("Not enough balance")
      } else if (maxHoldingCheck()) {
        setProhibited(`Max position size: ${maxHolding.toString()} ${currentAmm}`)
      } else {
        setProhibited("")
      }
    } else {
      setProhibited("Please connect wallet")
    }
  }, [account, currentAmm, enoughBalance, maxHolding, maxHoldingCheck])

  const enoughAllowance = useCallback(async () => {
    if (!account || !signer) return
    const quoteAmount = parsedAmounts[Field.Collateral] ?? Big(0)

    let allowance: BigNumber | undefined = undefined
    try {
      allowance = await contracts.usdc.allowance(account, contracts.clearingHouse.address)
    } catch (e) {
      console.error(e)
    }

    if (allowance && fromWei(allowance).gt(quoteAmount)) setApproved(true)
    else setApproved(false)
  }, [account, parsedAmounts, signer])

  const calculateTransactionSummary = useCallback(async () => {
    try {
      const baseAmount = parsedAmounts[Field.Amount]
      const quoteAmount = parsedAmounts[Field.Collateral]

      if (!markPrice.gt(0)) return
      if (!quoteAmount || !baseAmount) {
        setTransactionSummary({
          entryPrice: Big(0),
          priceImpact: Big(0),
          fee: Big(0),
          totalCost: Big(0),
          liquidationPrice: Big(0)
        })
        return
      }
      const notional = Big(quoteAmount).mul(leverage)
      const baseOut = decimalFromWei(
        await contracts.amms[currentAmm]!.getInputPrice(direction, toWeiDecimal(notional))
      )
      const entryPrice =
        direction === Direction.ADD_TO_AMM
          ? Big(quoteReserve).plus(notional).div(Big(baseReserve).minus(baseOut))
          : Big(quoteReserve).minus(notional).div(Big(baseReserve).plus(baseOut))
      const priceImpact = entryPrice.minus(markPrice).div(markPrice).mul(100).abs()
      const fee = notional.mul(spreadRatio.add(tollRatio))
      const totalCost = Big(quoteAmount).plus(fee)

      const liquidationPrice = notional
        .mul(maintenanceMarginRatio)
        .sub(quoteAmount)
        .div(baseAmount)
        .add(entryPrice.mul(direction === Direction.ADD_TO_AMM ? 1 : -1))
        .abs()
      setTransactionSummary({ entryPrice, priceImpact, fee, totalCost, liquidationPrice })
    } catch (e) {
      console.error(e)
    }
  }, [
    baseReserve,
    currentAmm,
    direction,
    leverage,
    markPrice,
    quoteReserve,
    spreadRatio,
    parsedAmounts,
    maintenanceMarginRatio,
    tollRatio
  ])

  useEffect(() => {
    timedInput(enoughAllowance, calculateTransactionSummary)
    // @yash: do not put timedInput in the deps array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enoughAllowance, calculateTransactionSummary])

  const approve = async () => {
    if (approved) return true
    if (!account) return false
    try {
      setLoading(Loading.APPROVE)
      try {
        await contracts.usdc.approve(contracts.clearingHouse.address, constants.MaxUint256)
      } catch (e: any) {
        const match = e.message.match(/execution reverted(.*)"/)
        throw new Error(match && match.length ? (!!match[1] ? match[1] : match[0]) : e.message)
      }
      setApproved(true)
      setLoading(Loading.FALSE)
      return true
    } catch (e: any) {
      setLoading(Loading.FALSE)
      console.error(e.message)
      return false
    }
  }
  const openPosition = async () => {
    const quoteAmount = parsedAmounts[Field.Collateral]
    if (!account || !signer || chainId !== Number(process.env.NEXT_PUBLIC_NETWORK_ID) || !quoteAmount) return
    setLoading(Loading.TRADE)
    try {
      const _quoteAmount = toWeiDecimal(quoteAmount)
      const _leverage = toWeiDecimal(leverage)
      const baseOut = decimalFromWei(
        await contracts.amms[currentAmm]!.getInputPrice(
          direction,
          toWeiDecimal(Big(quoteAmount).mul(leverage))
        )
      )
      const slippageLimit = baseOut.mul(slippage.val).div(100)
      const minBaseDesired = toWeiDecimal(
        direction === Direction.ADD_TO_AMM ? baseOut.minus(slippageLimit) : baseOut.plus(slippageLimit)
      )
      setOpenPositionTx({
        direction,
        asset: currentAmm,
        baseAmount: baseOut,
        quoteAmount,
        ...transactionSummary,
        leverage,
        hash: "",
        error: "",
        mined: false
      })
      onOpen()

      try {
        const tx = await contracts.clearingHouse.openPosition(
          contracts.amms[currentAmm]!.address,
          direction,
          _quoteAmount,
          _leverage,
          minBaseDesired
        )

        setOpenPositionTx((prev) => ({ ...prev, hash: tx.hash }))
        await tx.wait(1)
        setOpenPositionTx((prev) => ({ ...prev, mined: true }))
      } catch (e: any) {
        console.error("threw in estimate gas", e.message)
        const match = e.message.match(/execution reverted(.*)"/)
        if (match && Array.isArray(match)) {
          throw new Error(match[1] ? match[1] : match[0])
        }
        throw new Error(e.message)
      }
      // const sentTx = tx.send({ from: account, gasPrice })
      // sentTx.once("transactionHash", (hash) => {
      //   setLoading(Loading.FALSE)
      //   setOpenPositionTx((prev) => ({ ...prev, hash }))
      // })
      // sentTx.once("confirmation", () => setOpenPositionTx((prev) => ({ ...prev, mined: true })))
      // sentTx.once("error", (err) => {
      //   setOpenPositionTx((prev) => ({ ...prev, error: err.message }))
      // })
    } catch (e: any) {
      console.error("error in opening position", e.message)
      setOpenPositionTx((prev) => ({ ...prev, error: e.message }))
    }
    setLoading(Loading.FALSE)
  }

  const onMax = async () => {
    const amount = Big(usdcBalance)
      .div(Big(leverage).mul(spreadRatio.add(tollRatio)).add(1))
      .toFixed(10)
    onFieldInput(Field.Collateral)(truncate(amount))
  }

  const onLeverageChange = (value: number) => {
    const newLeverage = value / 2
    setLeverage(newLeverage)
  }

  const router = useRouter()
  return (
    <Box className="ms-panel">
      <OpenPositionModal isOpen={isOpen} onClose={onClose} metadata={openPositionTx} />
      <Box className="ml-tutorial-highlight-2" p="1rem 1rem 0.5rem">
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<TriangleDownIcon />}
            className="ms-button ms-button--dark ms-button--corner ms-button--spread"
          >
            {currentAmm + "/USDC"}
          </MenuButton>
          <MenuList zIndex="popover" minWidth="300px" className="ms-dropdown">
            {supportedAmms.map((ammName) => {
              return (
                <MenuItem
                  key={Math.random()}
                  fontWeight={ammName == currentAmm ? "bold" : "normal"}
                  onClick={() => {
                    router.push(`/trade/${ammName}`)
                  }}
                >
                  {ammName + "/USDC"}
                </MenuItem>
              )
            })}
          </MenuList>
        </Menu>
      </Box>
      <Box p="1rem 0 0" className="ms-panel__fields">
        <Flex m="0 0 1rem" p="0 1rem" flexDirection="row" justifyContent="space-between">
          <Text>USDC Balance</Text>
          <Text>{format(usdcBalance)}</Text>
        </Flex>
        <Box className="ms-switch">
          <Button
            className={`ms-button ms-button--small${
              direction === Direction.ADD_TO_AMM ? `` : ` ms-button--transparent`
            }`}
            onClick={() => setDirection(Direction.ADD_TO_AMM)}
          >
            <Text textAlign="center">BUY/LONG</Text>
          </Button>
          <Button
            className={`ms-button ms-button--small${
              direction === Direction.REMOVE_FROM_AMM ? ` ms-button--alt` : ` ms-button--transparent`
            }`}
            onClick={() => setDirection(Direction.REMOVE_FROM_AMM)}
          >
            <Text textAlign="center">SELL/SHORT</Text>
          </Button>
        </Box>

        <Box m="-1rem 0 0" p="1rem" className="ml-tutorial-highlight-3">
          <Text fontWeight="bold">Amount</Text>
          <InputGroup size="sm" m="0.5rem 0">
            <Input
              w="100%"
              className="ms-input"
              placeholder="0.0"
              value={formattedAmounts[Field.Amount]}
              onChange={({ currentTarget }) => {
                onFieldInput(Field.Amount)(currentTarget.value.replace(/,/g, "."))
              }}
            />
            <InputRightAddon className="ms-input-addon">{currentAmm}</InputRightAddon>
          </InputGroup>

          <Text fontWeight="bold">Collateral</Text>
          <InputGroup size="sm" m="0.5rem 0 0">
            <Input
              w="100%"
              className="ms-input"
              placeholder="0.0"
              value={formattedAmounts[Field.Collateral]}
              onChange={({ currentTarget }) => {
                onFieldInput(Field.Collateral)(currentTarget.value)
              }}
            />
            <InputRightElement className="ms-input-button" width="4.5rem" mr="3.8rem">
              <Button h="1.4rem" size="sm" onClick={onMax}>
                Max
              </Button>
            </InputRightElement>
            <InputRightAddon className="ms-input-addon">USDC</InputRightAddon>
          </InputGroup>
        </Box>

        <Box m="-1rem 0" p="1rem" className="ml-tutorial-highlight-4">
          <Text>Leverage {leverage} X</Text>
          <Slider
            defaultValue={leverage}
            mt="0.5rem"
            min={2}
            max={20}
            onChange={(val) => onLeverageChange(+val)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Flex flexDirection="row" justifyContent="space-between">
            <Text>1 X</Text>
            <Text>10 X</Text>
          </Flex>
        </Box>

        <Box p="0 1rem" className="ml-tutorial-highlight-5">
          <Slippage slippage={slippage} setSlippage={setSlippage} />
          {+slippage.val > 50 && (
            <Text className="ms-helper__warning">Custom slippage should be between 0 - 50</Text>
          )}
        </Box>
        {prohibited && (
          <Alert m="0 1rem" w="auto" status="warning" variant="left-accent" roundedRight="full" mt="10px">
            <AlertIcon />
            {prohibited}
          </Alert>
        )}
        <Flex flex="1" p="0 1rem 1rem" flexDirection="column" justifyContent="flex-end">
          <Box className="ms-summary">
            <Text fontWeight="bold" m="0.5rem 0">
              Transaction Summary
            </Text>
            <Flex flexDirection="row" fontSize="0.8rem" justifyContent="space-between" mb="0.5rem">
              <Text opacity="0.5">Entry Price</Text>
              <Skeleton isLoaded={!skeleton} width={skeleton ? "7rem" : ""} height={skeleton ? "1rem" : ""}>
                <Text>{format(transactionSummary.entryPrice)}</Text>
              </Skeleton>
            </Flex>
            <Flex flexDirection="row" fontSize="0.8rem" justifyContent="space-between" mb="0.5rem">
              <Text opacity="0.5">Price Impact</Text>
              <Skeleton isLoaded={!skeleton} width={skeleton ? "7rem" : ""} height={skeleton ? "1rem" : ""}>
                <Text>{format(transactionSummary.priceImpact)} %</Text>
              </Skeleton>
            </Flex>
            <Flex flexDirection="row" fontSize="0.8rem" justifyContent="space-between" mb="0.5rem">
              <Text opacity="0.5">Liquidation Price</Text>
              <Skeleton isLoaded={!skeleton} width={skeleton ? "7rem" : ""} height={skeleton ? "1rem" : ""}>
                <Text>{format(transactionSummary.liquidationPrice)}</Text>
              </Skeleton>
            </Flex>
            <Flex flexDirection="row" fontSize="0.8rem" justifyContent="space-between" mb="0.5rem">
              <Text opacity="0.5">Transaction Fee</Text>
              <Skeleton isLoaded={!skeleton} width={skeleton ? "7rem" : ""} height={skeleton ? "1rem" : ""}>
                <Text>{format(transactionSummary.fee)} USDC</Text>
              </Skeleton>
            </Flex>
            <Flex flexDirection="row" fontSize="0.8rem" justifyContent="space-between" mb="0.5rem">
              <Text opacity="0.5">Total Cost</Text>
              <Skeleton isLoaded={!skeleton} width={skeleton ? "7rem" : ""} height={skeleton ? "1rem" : ""}>
                <Text>{format(transactionSummary.totalCost)} USDC</Text>
              </Skeleton>
            </Flex>
          </Box>
          {!approved ? (
            <Button
              className="ms-button ms-button--spread ms-button--space-vert"
              isLoading={loading === Loading.APPROVE}
              loadingText="Approving"
              onClick={approve}
              width="100%"
            >
              <Text>Approve</Text>
            </Button>
          ) : (
            <Button
              className={`ms-button ms-button--spread ms-button--space-vert${
                direction === Direction.REMOVE_FROM_AMM ? ` ms-button--alt` : ``
              }`}
              isLoading={loading === Loading.TRADE}
              loadingText="Processing"
              onClick={openPosition}
              disabled={!enoughBalance() || maxHoldingCheck() || skeleton}
            >
              <Text>Open Position</Text>
            </Button>
          )}
        </Flex>
      </Box>
    </Box>
  )
}

export default Panel

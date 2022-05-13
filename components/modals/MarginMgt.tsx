import { useEffect, useState, useCallback } from "react"
import Big from "big.js"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  InputGroup,
  InputRightAddon,
  Button,
  Tab,
  Tabs,
  TabList,
  Progress,
  Input,
  StatGroup,
  Stat,
  StatNumber,
  StatLabel,
  Skeleton,
  Alert,
  AlertIcon,
  Divider,
  Link
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Position } from "common/types"
import { decimalFromWei, toWeiDecimal, format } from "../../utils/math"
import { useAppSelector } from "redux/hooks"
import protocol from "protocol"
import { INPUT_REGEX } from "common"
import { getContracts } from "utils/ethersContract"

const MarginMgtModal: React.FC<{ isOpen: boolean; onClose: () => void; position: Position }> = ({
  isOpen,
  onClose,
  position
}) => {
  const { asset, margin, leverage, size, entryPrice } = position
  const { account, usdcBalance, signer } = useAppSelector((state) => state.WalletState)
  const { generalData } = useAppSelector((state) => state.ProtocolState)
  const { maintenanceMarginRatio } = generalData

  const [timer, setTimer] = useState(0)
  const [marginAmount, setMarginAmount] = useState<string>("")
  const [tabIndex, setTabIndex] = useState<0 | 1>(0)
  const [skeleton, setSkeleton] = useState<boolean>(false)
  const [liqPrice, setLiqPrice] = useState<Big>(Big(0))
  const [netMargin, setNetMargin] = useState<string>("")
  const [prohibited, setProhibited] = useState<string>("")
  const [txStatus, setTxStatus] = useState<{
    initiated: boolean
    hash: string
    error: string
    mined: boolean
  }>({
    initiated: false,
    hash: "",
    error: "",
    mined: false
  })
  const contracts = getContracts(signer)

  useEffect(() => {
    if (!isOpen && !txStatus.initiated) {
      setTxStatus((_prev) => ({ initiated: false, hash: "", error: "", mined: false }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, account])

  const timedInput = (...computations: (() => void)[]) => {
    if (!skeleton) setSkeleton(true)
    clearTimeout(timer)
    const x = window.setTimeout(async () => {
      await Promise.all(computations.map((computation) => computation()))
      setSkeleton(false)
    }, 1500)
    setTimer(x)
  }

  useEffect(() => {
    if (!tabIndex) {
      if (usdcBalance.lt(+marginAmount)) {
        setProhibited("Not enough balance")
      } else {
        setProhibited("")
      }
    } else {
      if (!margin.sub(+marginAmount).gt(0)) {
        setProhibited("Margin cannot go below 0")
      } else {
        setProhibited("")
      }
    }
  }, [margin, marginAmount, tabIndex, usdcBalance])

  const calcLiqPrice = useCallback(async () => {
    if (!marginAmount) {
      setLiqPrice(Big(0))
      return
    }
    try {
      const amm = contracts.amms[asset]!
      const markPrice = decimalFromWei(await amm.getSpotPrice())
      const markAmountOut = markPrice.mul(size.abs())
      const openNotional = margin.mul(leverage)
      const newLeverage = openNotional.div(netMargin)
      const reverseLeverage = Big(1).div(newLeverage)
      const exitAmountOut = decimalFromWei(
        await amm.getOutputPrice(size.gt(0) ? 0 : 1, toWeiDecimal(size.abs()))
      )
      const closePosSlippage = exitAmountOut.minus(markAmountOut).div(markAmountOut)
      const liquidationPrice = size.gt(0)
        ? entryPrice.mul(Big(1).minus(reverseLeverage).minus(closePosSlippage).plus(maintenanceMarginRatio))
        : entryPrice.mul(Big(1).plus(reverseLeverage).minus(closePosSlippage).minus(maintenanceMarginRatio))
      setLiqPrice(liquidationPrice)
    } catch (e) {
      console.error(e)
    }
  }, [asset, entryPrice, leverage, maintenanceMarginRatio, margin, marginAmount, netMargin, size])

  useEffect(() => {
    timedInput(calcLiqPrice)
    // @yash: do not put timedInput in the deps array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calcLiqPrice])

  const onMarginAdjust = async () => {
    try {
      if (!marginAmount) return
      setTxStatus({ initiated: true, hash: "", error: "", mined: false })
      try {
        let tx: any
        switch (tabIndex) {
          case 0: {
            tx = await contracts.clearingHouse.addMargin(protocol.amms[asset], toWeiDecimal(marginAmount))
            break
          }
          case 1: {
            tx = await contracts.clearingHouse.removeMargin(protocol.amms[asset], toWeiDecimal(marginAmount))
            break
          }
        }

        setTxStatus((prev) => ({ ...prev, hash: tx.hash }))
        await tx.wait(1)
        setTxStatus((prev) => ({ ...prev, initiated: false, mined: true }))
      } catch (e: any) {
        console.error("threw in estimate gas", e.message)
        const match = e.message.match(/execution reverted(.*)"/)
        if (match && Array.isArray(match)) {
          throw new Error(match[1] ? match[1] : match[0])
        }
        throw new Error(e.message)
      }
    } catch (e: any) {
      console.error("error in adjusting margin", e.message)
      setTxStatus((prev) => ({ ...prev, initiated: false, error: e.message }))
    }
  }

  const onMarginChange = useCallback(
    (value: string) => {
      const match = value.match(INPUT_REGEX)
      if (match) {
        setMarginAmount(value)
        setNetMargin(tabIndex ? margin.sub(+value).toString() : margin.add(+value).toString())
      }
    },
    [margin, tabIndex]
  )

  useEffect(() => {
    onMarginChange(marginAmount)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onMarginChange])

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      closeOnEsc={false}
      motionPreset="slideInBottom"
      size="2xl"
    >
      <ModalOverlay />
      <ModalContent color="#fff">
        <ModalHeader>Margin Management</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Tabs
              isFitted
              variant="enclosed"
              defaultIndex={tabIndex}
              onChange={(index) => setTabIndex(index as 0 | 1)}
            >
              <TabList>
                <Tab _selected={{ bgColor: "green.400" }}>Add Margin</Tab>
                <Tab _selected={{ bgColor: "red.500" }}>Remove Margin</Tab>
              </TabList>
              {/* <TabPanels>
              <TabPanel></TabPanel>
            </TabPanels> */}
            </Tabs>
          </Box>
          <Box mt="5">
            <InputGroup>
              <Input
                w="100%"
                placeholder="0.0"
                value={marginAmount}
                onChange={({ currentTarget }) => {
                  onMarginChange(currentTarget.value)
                }}
              />
              <InputRightAddon>USDC</InputRightAddon>
            </InputGroup>
            <Box
              p="4"
              mt="5"
              rounded="md"
              border="1px"
              borderColor="green"
              display="flex"
              flexDir="column"
              justifyContent="space-between"
            >
              <StatGroup textAlign="center">
                <Stat>
                  <StatLabel>Current Margin</StatLabel>
                  <StatNumber>{format(margin)}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>New Margin</StatLabel>
                  <StatNumber>{margin.eq(+netMargin) ? "-" : format(+netMargin)}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>New Liq. Price</StatLabel>
                  <Skeleton isLoaded={!skeleton}>
                    <StatNumber>{liqPrice.gt(0) ? format(liqPrice) : "-"}</StatNumber>
                  </Skeleton>
                </Stat>
              </StatGroup>
            </Box>
            <Divider my="3" />
            {prohibited && (
              <Alert mb="3" status="warning" variant="left-accent" roundedRight="full" mt="10px">
                <AlertIcon />
                {prohibited}
              </Alert>
            )}
            {(txStatus.initiated || txStatus.mined) && !txStatus.error && (
              <Progress
                isIndeterminate={txStatus.initiated && !txStatus.mined}
                colorScheme="green"
                value={txStatus.mined ? 100 : undefined}
              />
            )}
            {txStatus.error && (
              <Alert status="error" variant="left-accent">
                <AlertIcon />
                {txStatus.error}
              </Alert>
            )}
            {(txStatus.initiated || txStatus.mined) && <Divider my="3" />}
            {txStatus.hash && (
              <Link
                p="2"
                mt="3"
                textAlign="center"
                href={`https://testnet.ftmscan.com/tx/${txStatus.hash}`}
                isExternal
                style={{ textDecoration: "none" }}
                rounded="lg"
                display="block"
                bg="green.400"
              >
                <strong>
                  View in explorer <ExternalLinkIcon ml="1" />{" "}
                </strong>
              </Link>
            )}
            {(txStatus.initiated || txStatus.mined) && !txStatus.error ? (
              <Box mt="3">
                <Button rounded="xl" onClick={onClose} w="full">
                  Close
                </Button>
              </Box>
            ) : (
              <Box mt="4">
                <Button
                  disabled={!!prohibited.length || !marginAmount || skeleton}
                  onClick={onMarginAdjust}
                  className={`ms-button ms-button--small ms-button--spread${
                    tabIndex ? " ms-button--alt" : ""
                  }`}
                >
                  {tabIndex ? "Remove Margin" : "Add Margin"}
                </Button>
              </Box>
            )}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default MarginMgtModal

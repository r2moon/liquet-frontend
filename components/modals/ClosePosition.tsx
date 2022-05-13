import { useEffect, useState } from "react"
import Slippage from "components/Slippage"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Box,
  Button,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Divider,
  Progress,
  Link,
  Alert,
  AlertIcon
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { ClosePosMetadata, Direction, Position, SlippageType } from "common/types"
import { decimalFromWei, format, toWeiDecimal, fromWei } from "../../utils/math"
import BN, { Big } from "big.js"
import { useAppSelector } from "redux/hooks"
import { getContracts } from "utils/ethersContract"

const CloseModal: React.FC<{ isOpen: boolean; onClose: () => void; position: Position }> = ({
  isOpen,
  onClose,
  position
}) => {
  const [slippage, setSlippage] = useState<SlippageType>({ type: 1, val: "0.5" })
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
  const { pnl, size, margin, asset, side, leverage } = position
  const { account, chainId, signer } = useAppSelector((state) => state.WalletState)
  const [closePosMetadata, setClosePosMetadata] = useState<ClosePosMetadata>({
    exitAmountOut: Big(0),
    exitPrice: Big(0),
    priceImpact: Big(0),
    fee: Big(0)
  })
  const contracts = getContracts(signer)

  useEffect(() => {
    async function getAmountOut() {
      if (!size.gt(0)) return
      try {
        const amm = contracts.amms[asset]!
        const dir = side === "long" ? Direction.ADD_TO_AMM : Direction.REMOVE_FROM_AMM
        const exitAmountOut = decimalFromWei(await amm.getOutputPrice(dir, toWeiDecimal(size.abs())))
        const quoteReserve = fromWei(await amm.quoteAssetReserve())
        const baseReserve = fromWei(await amm.baseAssetReserve())
        const spreadRatio = fromWei(await amm.spreadRatio())
        const tollRatio = fromWei(await amm.tollRatio())
        const exitPrice = BN(quoteReserve).minus(exitAmountOut).div(BN(baseReserve).plus(size.abs()))
        const fee = margin.mul(leverage).mul(spreadRatio.add(tollRatio))
        const markPrice = decimalFromWei(await amm.getSpotPrice())
        const priceImpact = markPrice.minus(exitPrice).div(markPrice).mul(100).abs()
        setClosePosMetadata({
          exitAmountOut,
          exitPrice,
          fee,
          priceImpact
        })
      } catch (e) {
        console.error(e)
      }
    }
    getAmountOut()
    if (!isOpen && !txStatus.initiated) {
      setTxStatus((_prev) => ({ initiated: false, hash: "", error: "", mined: false }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asset, margin, side, size, isOpen, leverage, account])

  useEffect(() => {
    onClose()
  }, [account, onClose])

  const onClosePosition = async () => {
    if (chainId !== Number(process.env.NEXT_PUBLIC_NETWORK_ID)) return
    try {
      const { exitAmountOut } = closePosMetadata
      const slippageLimit = exitAmountOut.mul(slippage.val).div(100)
      const quoteLimit =
        side === "long" ? exitAmountOut!.minus(slippageLimit) : exitAmountOut!.plus(slippageLimit)
      setTxStatus({ initiated: true, hash: "", error: "", mined: false })

      try {
        const tx = await contracts.clearingHouse.closePosition(
          contracts.amms[position.asset]!.address,
          toWeiDecimal(quoteLimit)
        )
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
      console.error("error in closing position", e.message)
      setTxStatus((prev) => ({ ...prev, initiated: false, error: e.message }))
    }
  }

  const renderClosePos = () => {
    if (!position) return <></>
    return (
      <Button my="1rem" rounded="xl" bg="green.400" onClick={onClosePosition}>
        <Text>Close Position</Text>
      </Button>
    )
  }

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
        <ModalHeader>Transaction Summary</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Box p="6" display="flex" flexDir="column">
            <Box
              p="4"
              rounded="md"
              border="1px"
              borderColor="green"
              display="flex"
              flexDir="column"
              justifyContent="space-between"
            >
              <StatGroup textAlign="center">
                <Stat>
                  <StatLabel>AMM</StatLabel>
                  <StatNumber>{asset}</StatNumber>
                </Stat>

                <Stat>
                  <StatLabel>Price Impact %</StatLabel>
                  <StatNumber>{format(closePosMetadata.priceImpact, 2)}</StatNumber>
                </Stat>
              </StatGroup>
              <Divider my="4" />
              <StatGroup textAlign="center">
                <Stat>
                  <StatLabel>Margin</StatLabel>
                  <StatNumber>{format(margin)}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>PNL</StatLabel>
                  <StatNumber color={pnl.gt(0) ? "green.400" : pnl.lt(0) ? "red.400" : undefined}>
                    {format(pnl)}
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Estimated Output</StatLabel>
                  <StatNumber>{format(margin.plus(pnl).minus(closePosMetadata.fee))}</StatNumber>
                </Stat>
              </StatGroup>
            </Box>
            <Divider my="4" />
            {(txStatus.initiated || txStatus.mined) && !txStatus.error && (
              <Box>
                <Progress
                  isIndeterminate={txStatus.initiated && !txStatus.mined}
                  colorScheme="green"
                  value={txStatus.mined ? 100 : undefined}
                />
              </Box>
            )}
            {(txStatus.error || (!txStatus.initiated && !txStatus.mined)) && (
              <Slippage slippage={slippage} setSlippage={setSlippage} />
            )}
            <Divider my="4" />
            {txStatus.hash && (
              <Link
                p="2"
                textAlign="center"
                href={`https://testnet.ftmscan.com/tx/${txStatus.hash}`}
                isExternal
                style={{ textDecoration: "none" }}
                rounded="lg"
                bg="green.400"
              >
                <strong>
                  {" "}
                  View in explorer <ExternalLinkIcon ml="1" />{" "}
                </strong>
              </Link>
            )}
            {txStatus.error && (
              <Alert status="error" variant="left-accent">
                <AlertIcon />
                {txStatus.error}
              </Alert>
            )}
            {(txStatus.initiated || txStatus.mined) && !txStatus.error && (
              <Button mt="5" rounded="xl" onClick={onClose}>
                Close
              </Button>
            )}
            {((!txStatus.initiated && !txStatus.mined) || txStatus.error) && renderClosePos()}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default CloseModal

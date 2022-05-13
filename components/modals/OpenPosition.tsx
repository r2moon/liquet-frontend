import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Link,
  Box,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Divider,
  Progress,
  Button,
  Alert,
  AlertIcon
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Direction, Transaction } from "common/types"
import { format } from "utils/math"

const OpenPositionModal: React.FC<{
  isOpen: boolean
  onClose: () => void
  metadata: Transaction
}> = ({ isOpen, onClose, metadata }) => {
  if (!Object.keys(metadata).length) return <></>
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
                  <StatNumber>{metadata.asset}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Direction</StatLabel>
                  <StatNumber>
                    <Badge
                      borderRadius="full"
                      px="2"
                      fontSize="md"
                      colorScheme={metadata.direction === Direction.ADD_TO_AMM ? "green" : "red"}
                    >
                      {metadata.direction === Direction.ADD_TO_AMM ? "LONG" : "SHORT"}
                    </Badge>
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Leverage</StatLabel>
                  <StatNumber>{metadata.leverage}</StatNumber>
                </Stat>
              </StatGroup>
              <Divider my="4" />
              <StatGroup textAlign="center">
                <Stat>
                  <StatLabel>Collateral</StatLabel>
                  <StatNumber>{format(metadata.quoteAmount)}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Entry Price</StatLabel>
                  <StatNumber>{format(metadata.entryPrice)}</StatNumber>
                </Stat>
              </StatGroup>
            </Box>
            <Divider my="4" />
            <Box>
              <Progress
                isIndeterminate={metadata.mined || metadata.error ? false : true}
                colorScheme="green"
                value={metadata.mined ? 100 : undefined}
              />
            </Box>
            <Divider my="4" />
            {metadata.hash ? (
              <Link
                p="2"
                textAlign="center"
                href={`https://testnet.ftmscan.com/tx/${metadata.hash}`}
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
            ) : metadata.error ? (
              <Alert status="error" variant="left-accent">
                <AlertIcon />
                {metadata.error}
              </Alert>
            ) : (
              <></>
            )}

            <Button mt="5" rounded="lg" onClick={onClose}>
              Close
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default OpenPositionModal

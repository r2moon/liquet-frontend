import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  Text,
  Image,
  Button
} from "@chakra-ui/react"
import { useWallet } from "../../hooks/useWallet"
const ConnectModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { connect } = useWallet()

  const connectToMetamask = () => {
    connect()
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent bg="#fff">
        <ModalHeader>Connect Wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Button className="ms-button ms-button--spread" onClick={connectToMetamask}>
            <Image src="/images/login/metamask.svg" alt="" />
            <Text m="auto 1rem">Metamask</Text>
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ConnectModal

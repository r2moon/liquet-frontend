import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Text, Center } from "@chakra-ui/react"
import ReactLoading from "react-loading"

const GetTestUsdcModal: React.FC<{
  isOpen: boolean
  onClose: () => void
}> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent color="#fff">
        <ModalHeader>Waiting For Confirmation</ModalHeader>
        <ModalBody>
          <Text>Sending 10000 USDC to your wallet...</Text>
          {/* type LoadingType = "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes" */}
          <Center mt="2rem" mb="4rem">
            <ReactLoading type={"spinningBubbles"} color="green.400" height={"2rem"} />
          </Center>
          <Center fontWeight="bold" mt="1.5rem" mb="1rem" color="green.400">
            Confirm this transaction in your wallet
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default GetTestUsdcModal

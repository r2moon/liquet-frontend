import { useWallet } from "../hooks/useWallet"
import {
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Link,
  Box,
  Button
} from "@chakra-ui/react"
import toast from "react-hot-toast"
import NextLink from "next/link"
import { HamburgerIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"
import ConnectModal from "./modals/ConnectModal"
import { format, shortAddr } from "utils/math"
import { Activity } from "react-feather"
import MsLogo from "./Logo"

// If the user's USDC balance is below this number, display the USDC faucet
// const MINIMUM_USDC_BALANCE = 10000
import { Routes } from "shared/pages/routes"
import { useAppSelector } from "redux/hooks"

const Header = () => {
  const { disconnect, switchChain, connect } = useWallet()
  const { account, chainId, balance, isKeplrWallet } = useAppSelector((state) => state.WalletState)
  console.log(account, chainId, balance.toString())
  const {
    isOpen: isOpenConnectModal,
    // onOpen: onOpenConnectModal,
    onClose: onCloseConnectModal
  } = useDisclosure() // from chakra ui modal

  const router = useRouter()

  const handleConnect = () => {
    if (isKeplrWallet) {
      connect()
    } else {
      toast.error(
        "It seems like you don't have Keplr extention installed in your browser. Install Keplr, reload the page and try again"
      )
    }
  }

  // const renderUsdcFaucet = () => {
  //   return (
  //     <Button className="ms-button ms-button--small ms-button--space" onClick={onGetTestUsdc}>
  //       <Box p="0 0.4rem 0 0">
  //         <Zap size="1rem" />
  //       </Box>
  //       <Text>Get Test USDC</Text>
  //     </Button>
  //   )
  // }

  // const onGetTestUsdc = async () => {
  //   // Open the modal

  //   // Attempt to send USDC to the user
  //   try {
  //     const tx = usdc.mint()

  //     try {
  //       await tx.estimateGas({ from: account })
  //     } catch (e: any) {
  //       const match = e.message.match(/execution reverted: (.*)"/)
  //       if (match) {
  //         toast.error(match[1], { duration: 2500 })
  //         throw new Error(match[1])
  //       }
  //     }
  //     onOpenGetTestUsdc()

  //     const fastGasPrice = BN(await web3.eth.getGasPrice())
  //       .mul(3)
  //       .div(2) // 1.5x

  //     await tx.send({ from: account, gasPrice: fastGasPrice.toString() })
  //   } catch (error: any) {
  //     console.error("An error occurred in onGetTestUsdc():", error)
  //   } finally {
  //     onCloseGetTestUsdc()
  //   }
  // }

  const renderWrongNetwork = () => {
    return (
      <Button
        className="ms-button ms-button--small ms-button--alt ms-button--space"
        onClick={() => switchChain()}
      >
        <Box p="0 0.4rem 0 0">
          <Activity size="1rem" />
        </Box>
        <Text>Wrong Network</Text>
      </Button>
    )
  }

  const renderWallet = () => {
    if (account)
      return (
        <Menu>
          <MenuButton className="ms-button ms-button--small ms-button--transparent ms-button--space">
            <Text m="auto 0">{shortAddr(account)}</Text>
          </MenuButton>
          <MenuList zIndex="popover" className="ms-dropdown" onClick={() => disconnect()}>
            <MenuItem>Disconnect</MenuItem>
          </MenuList>
        </Menu>
      )
    return (
      <Button className="ms-button ms-button--small ms-button--space" onClick={handleConnect}>
        <Text m="auto 0">Connect</Text>
      </Button>
    )
  }

  return (
    <div className="ms-header">
      <div className="ms-header__logo">
        <MsLogo />
      </div>
      {router.pathname !== Routes.restrictedCountry && (
        <div className="ms-header__menu">
          <ConnectModal isOpen={isOpenConnectModal} onClose={onCloseConnectModal} />
          {chainId !== Number(process.env.NEXT_PUBLIC_NETWORK_ID) && renderWrongNetwork()}
          <Button className="ms-button ms-button--small">
            <Text>{format(balance)} FTM</Text>
          </Button>
          {/* <GetTestUsdcModal isOpen={isOpenGetTestUsdc} onClose={onCloseGetTestUsdc} /> */}
          {/* <Flex borderBottom="2px solid #4F535B" p="0 2rem">
            <Text m="auto 0" fontWeight="bold">
            Trade
            </Text>
            </Flex>
            <Flex p="0 2rem" cursor="pointer">
            <Text m="auto 0" fontWeight="bold" as="u">
            Reward
            </Text>
          </Flex> */}
          {/* {account && chainId === Number(process.env.NEXT_PUBLIC_NETWORK_ID) && renderUsdcFaucet()} */}
          {renderWallet()}
          <Menu>
            <MenuButton className="ms-button ms-button--icon ms-button--transparent ms-button--space">
              <HamburgerIcon mt="-0.2rem" />
            </MenuButton>
            <MenuList zIndex="popover" className="ms-dropdown">
              <Link href="https://matrix-labs.xyz/" isExternal style={{ textDecoration: "none" }}>
                <MenuItem>Website</MenuItem>
              </Link>
              <NextLink href={{ pathname: `/trade`, query: { tutorial: `play` } }}>
                <MenuItem>Tutorial</MenuItem>
              </NextLink>
              <Link href="https://docs.matrix-labs.xyz/" isExternal style={{ textDecoration: "none" }}>
                <MenuItem>Docs</MenuItem>
              </Link>
              <Link href="https://twitter.com/matrixswap" isExternal style={{ textDecoration: "none" }}>
                <MenuItem>Twitter</MenuItem>
              </Link>
              <Link href="https://t.me/matrixswapofficial" isExternal style={{ textDecoration: "none" }}>
                <MenuItem>Telegram</MenuItem>
              </Link>
              <Link href="https://discord.gg/nRJXNtZBe6" isExternal style={{ textDecoration: "none" }}>
                <MenuItem>Discord</MenuItem>
              </Link>
              <Link href="https://matrix-labs.xyz/blog" isExternal style={{ textDecoration: "none" }}>
                <MenuItem>Blog</MenuItem>
              </Link>
              <Link href="https://matrixlabs.medium.com/" isExternal style={{ textDecoration: "none" }}>
                <MenuItem>Medium</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </div>
      )}
    </div>
  )
}

export default Header

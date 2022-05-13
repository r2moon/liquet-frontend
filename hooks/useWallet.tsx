import Big from "big.js"
import { useCallback } from "react"
import toast from "react-hot-toast"
import { useAppDispatch, useAppSelector } from "redux/hooks"
import { WalletStateActions } from "redux/slices/wallet"
import { getWeb3 } from "utils/web3/web3"
import WalletConnectProvider from "@walletconnect/web3-provider"
import Web3Modal from "web3modal"
import { ethers } from "ethers"
import { getNetworkConfig } from "networks"

export const useWallet = () => {
  const dispatch = useAppDispatch()
  const walletState = useAppSelector((state) => state.WalletState)
  console.log("ABC", walletState)
  const web3 = getWeb3()

  const getWeb3Modal = useCallback(async () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            4002: "https://rpc.testnet.fantom.network"
          },
          chainId: 4002,
          infuraId: "744015d9bed44bc2a8c2860b1bb7f2ce",
          qrcodeModalOptions: {
            desktopLinks: []
          }
        }
      }
    }
    return new Web3Modal({
      network: "ftm",
      cacheProvider: true,
      providerOptions,
      theme: {
        background: "hsl(188, 51%, 7%)",
        main: "hsl(0, 0%, 96%)",
        secondary: "hsl(0, 0%, 36%)",
        border: "hsl(188, 51%, 5%)",
        hover: "hsl(188, 51%, 10%)"
      }
    })
  }, [])

  const connect = useCallback(async () => {
    console.log("hehe", walletState.isKeplrWallet)
    const { keplrWallet, isKeplrWallet } = walletState
    if (isKeplrWallet) {
      const networkConfig = getNetworkConfig()

      if (networkConfig.NETWORK_TYPE !== "NETWORK_TYPE") {
        await keplrWallet.experimentalSuggestChain({
          chainId: networkConfig.CHAIN_ID,
          chainName: networkConfig.CHAIN_NAME,
          rpc: networkConfig.SECRET_RPC,
          rest: networkConfig.SECRET_LCD,
          bip44: {
            coinType: 529
          },
          coinType: 529,
          stakeCurrency: {
            coinDenom: "SCRT",
            coinMinimalDenom: "uscrt",
            coinDecimals: 6
          },
          bech32Config: {
            bech32PrefixAccAddr: "secret",
            bech32PrefixAccPub: "secretpub",
            bech32PrefixValAddr: "secretvaloper",
            bech32PrefixValPub: "secretvaloperpub",
            bech32PrefixConsAddr: "secretvalcons",
            bech32PrefixConsPub: "secretvalconspub"
          },
          currencies: [
            {
              coinDenom: "SCRT",
              coinMinimalDenom: "uscrt",
              coinDecimals: 6
            }
          ],
          feeCurrencies: [
            {
              coinDenom: "SCRT",
              coinMinimalDenom: "uscrt",
              coinDecimals: 6
            }
          ],
          gasPriceStep: {
            low: 0.1,
            average: 0.25,
            high: 0.4
          },
          features: ["secretwasm"]
        })
      }

      // Ask the user for permission
      await keplrWallet.enable(networkConfig.CHAIN_ID)

      const keplrOfflineSigner = (window as any).getOfflineSigner(networkConfig.CHAIN_ID)
      const accounts = await keplrOfflineSigner.getAccounts()
      dispatch(WalletStateActions.setAccount(accounts[0].address))
      dispatch(WalletStateActions.setIsAuthorized(true))
    }
    // if (typeof (window as any).ethereum === "undefined") {
    //   return toast.error("Please install a metamask wallet like web3 to use this dapp")
    // }
    // const isKeplrWallet = !!window.keplr && !!window.getOfflineSigner && !!window.getEnigmaUtils

    // if (isKeplrWallet) {
    // } else {
    //   console.error("Not keplr extention")
    // }
    // try {
    //   const web3Modal = await getWeb3Modal()
    //   const localProvider = await web3Modal.connect()
    //   const ethersProvider = new ethers.providers.Web3Provider(localProvider)
    //   const signer = ethersProvider.getSigner()
    //   getWeb3(localProvider)
    //   dispatch(WalletStateActions.setSigner(signer))
    //   dispatch(WalletStateActions.setAccount(await signer.getAddress()))
    // } catch (error: any) {
    //   console.error(error)
    //   switch (error.code) {
    //     case 4001:
    //       toast("Please connect to Metamask", { icon: "⚠️" })
    //       break
    //     case -32002:
    //       toast("Please directly open Metamask", { icon: "⚠️" })
    //       break
    //     default:
    //       toast.error(error.message)
    //   }
    // }
  }, [dispatch, walletState])

  const disconnect = useCallback(async () => {
    dispatch(WalletStateActions.setAccount(""))
    const web3Modal = await getWeb3Modal()
    if (web3Modal.cachedProvider === "walletconnect") {
      const provider = new WalletConnectProvider({
        infuraId: "744015d9bed44bc2a8c2860b1bb7f2ce",
        rpc: {
          4002: "https://rpc.testnet.fantom.network"
        }
      })
      provider.disconnect()
    }
    web3Modal.clearCachedProvider()
  }, [dispatch, getWeb3Modal])

  const addChain = useCallback(async () => {
    try {
      await (window as any).ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x" + (4002).toString(16),
            chainName: "Fantom Network",
            nativeCurrency: {
              name: "FTM",
              symbol: "FTM",
              decimals: 18
            },
            rpcUrls: ["https://rpc.testnet.fantom.network"],
            blockExplorerUrls: ["https://testnet.ftmnscan.com/"]
          }
        ]
      })
    } catch (e: any) {
      console.error("error in adding chain", e.message)
    }
  }, [])

  const switchChain = useCallback(async () => {
    try {
      await (window as any).ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x" + (4002).toString(16) }]
      })
      dispatch(WalletStateActions.setChainId(4002))
    } catch (switchError: any) {
      if (switchError.code === 4902) {
        addChain()
      }
    }
  }, [addChain, dispatch])

  const fastGasPrice = useCallback(async () => {
    return Big(await web3.eth.getGasPrice())
      .mul(3)
      .div(2)
      .round()
      .toString() // 1.5x
  }, [web3.eth])

  return { connect, disconnect, switchChain, fastGasPrice }
}

import React, { FC, useEffect } from "react"
import BaseApp, { AppProps, AppContext } from "next/app"

import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/Layout"
import theme from "../theme"
import "../styles/main.scss"
import { Toaster } from "react-hot-toast"
import { store } from "../redux/store"
import { Provider } from "react-redux"
import { SWRConfig } from "swr"
import toast from "react-hot-toast"
import { useWallet } from "hooks/useWallet"
import { useAppDispatch } from "redux/hooks"
import { WalletStateActions } from "redux/slices/wallet"
import useRemoteData from "hooks/useRemoteData"

const fakeStorageManager = {
  get: () => "dark",
  set: (_value: any) => ({}),
  type: "cookie"
}

const InnerApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { connect, switchChain } = useWallet()
  const { getBalances } = useRemoteData()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const keplrCheckPromise = new Promise<void>((accept, _reject) => {
      // 1. Every one second, check if Keplr was injected to the page
      const keplrCheckInterval = setInterval(async () => {
        const { keplr, getOfflineSigner, getEnigmaUtils } = window as any
        const isKeplrWallet = !!keplr && !!getOfflineSigner && !!getEnigmaUtils

        if (isKeplrWallet) {
          console.log("true")
          // Keplr is present, stop checking
          clearInterval(keplrCheckInterval)
          dispatch(WalletStateActions.setIsKeplrWallet(isKeplrWallet))
          dispatch(WalletStateActions.setKeplrWallet(keplr))
          accept()
        } else {
          console.log("Keplr is not installed")
        }
      }, 1000)
    })

    async function init() {
      await keplrCheckPromise
      // const { ethereum } = window as any
      // await connect()
      // const chainId = +(await ethereum.request({ method: "eth_chainId" }))
      // dispatch(WalletStateActions.setChainId(chainId))
      // if (chainId !== Number(process.env.NEXT_PUBLIC_NETWORK_ID)) {
      //   await switchChain()
      // }
      // ethereum.on("chainChanged", (chainId: string) => dispatch(WalletStateActions.setChainId(+chainId)))
      // ethereum.on("accountsChanged", (accounts: string[]) =>
      //   dispatch(WalletStateActions.setAccount(accounts[0]))
      // )
    }
    init()
  }, [dispatch, switchChain, connect])

  useEffect(() => {
    getBalances()
  }, [getBalances])

  return <Component {...pageProps} />
}

const App = (props: AppProps) => {
  return (
    <ChakraProvider theme={theme} colorModeManager={fakeStorageManager as any}>
      <SWRConfig>
        <Provider store={store}>
          <Layout>
            <InnerApp {...props} />
            <Toaster position="top-right" />
          </Layout>
        </Provider>
      </SWRConfig>
    </ChakraProvider>
  )
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await BaseApp.getInitialProps(appContext)

  if (appContext.ctx.res?.statusCode === 404) {
    appContext.ctx.res.writeHead(301, { Location: "/" })
    appContext.ctx.res.end()
  }

  return { ...appProps }
}

export default App

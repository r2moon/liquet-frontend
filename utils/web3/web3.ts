import Web3 from "web3"

let web3: Web3

const initWeb3 = () => {
  if (!web3) {
    web3 = new Web3(Web3.givenProvider)
  }
}

const initWeb3WithProvider = (provider: any) => {
  web3 = new Web3(provider)
}

export const getWeb3 = (provider?: any) => {
  if (provider) {
    initWeb3WithProvider(provider)
  } else {
    initWeb3()
  }
  return web3
}

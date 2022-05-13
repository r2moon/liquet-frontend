import { Amm } from "../typechain/Amm"
import { ClearingHouse } from "../typechain/ClearingHouse"
import { ClearingHouseViewer } from "../typechain/ClearingHouseViewer"
import { InsuranceFund } from "../typechain/InsuranceFund"
import { MockERC20 } from "../typechain/MockERC20"
import { getWeb3 } from "../utils/web3/web3"
import ammJSON from "../abis/Amm.json"
import chJSON from "../abis/ClearingHouse.json"
import chViewerJSON from "../abis/ClearingHouseViewer.json"
import insuranceFundJSON from "../abis/InsuranceFund.json"
import mockUSDCJSON from "../abis/ERC20.json"
import protocol, { supportedAmms } from "../protocol"
import Web3 from "web3"
import { AmmName, Contracts } from "common/types"
import { rpc, rpc_ws } from "common"

const web3 = getWeb3()
export const websocketWeb3 = new Web3(rpc_ws)
export const fallbackWeb3 = new Web3(rpc)

const amms: { [key in AmmName]?: Amm } = {}
supportedAmms.map(
  (ammName) =>
    (amms[ammName] = new web3.eth.Contract(ammJSON as any, protocol.amms[ammName]) as unknown as Amm)
)

const fallbackAmms: { [key in AmmName]?: Amm } = {}
supportedAmms.map((ammName) => {
  fallbackAmms[ammName] = new fallbackWeb3.eth.Contract(
    ammJSON as any,
    protocol.amms[ammName]
  ) as unknown as Amm
})

const contracts: Contracts = {
  usdc: new web3.eth.Contract(mockUSDCJSON as any, protocol.usdc) as unknown as MockERC20,
  amms,
  clearingHouse: new web3.eth.Contract(chJSON as any, protocol.clearingHouse) as unknown as ClearingHouse,
  clearingHouseViewer: new web3.eth.Contract(
    chViewerJSON as any,
    protocol.clearingHouseViewer
  ) as unknown as ClearingHouseViewer,
  insuranceFund: new web3.eth.Contract(
    insuranceFundJSON as any,
    protocol.insuranceFund
  ) as unknown as InsuranceFund,
  fallback: {
    usdc: new fallbackWeb3.eth.Contract(mockUSDCJSON as any, protocol.usdc) as unknown as MockERC20,
    clearingHouse: new websocketWeb3.eth.Contract(
      chJSON as any,
      protocol.clearingHouse
    ) as unknown as ClearingHouse,
    amms: fallbackAmms,
    clearingHouseViewer: new fallbackWeb3.eth.Contract(
      chViewerJSON as any,
      protocol.clearingHouseViewer
    ) as unknown as ClearingHouseViewer,
    insuranceFund: new fallbackWeb3.eth.Contract(
      insuranceFundJSON as any,
      protocol.insuranceFund
    ) as unknown as InsuranceFund
  },
  websocket: {
    clearingHouse: new websocketWeb3.eth.Contract(
      chJSON as any,
      protocol.clearingHouse
    ) as unknown as ClearingHouse,
    usdc: new websocketWeb3.eth.Contract(mockUSDCJSON as any, protocol.usdc) as unknown as MockERC20
  }
}

export default contracts

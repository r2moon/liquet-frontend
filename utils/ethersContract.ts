import { Contract, Signer } from "ethers"
import { ClearingHouse } from "../typechain/ClearingHouse"
import { ClearingHouseViewer } from "../typechain/ClearingHouseViewer"
import { InsuranceFund } from "../typechain/InsuranceFund"
import { MockERC20 } from "../typechain/MockERC20"
import { Amm } from "../typechain/Amm"
import ammJSON from "../abis/Amm.json"
import chJSON from "../abis/ClearingHouse.json"
import chViewerJSON from "../abis/ClearingHouseViewer.json"
import insuranceFundJSON from "../abis/InsuranceFund.json"
import erc20JSON from "../abis/ERC20.json"
import protocol, { supportedAmms } from "../protocol"
import { AmmName, TransactionContracts } from "common/types"

export const getContracts = (signer: Signer | undefined): TransactionContracts => {
  const amms: { [key in AmmName]?: Amm } = {}
  supportedAmms.map(
    (ammName) => (amms[ammName] = new Contract(protocol.amms[ammName], ammJSON as any, signer) as Amm)
  )

  return {
    usdc: new Contract(protocol.usdc, erc20JSON as any, signer) as MockERC20,
    clearingHouse: new Contract(protocol.clearingHouse, chJSON as any, signer) as ClearingHouse,
    clearingHouseViewer: new Contract(
      protocol.clearingHouseViewer,
      chViewerJSON as any,
      signer
    ) as ClearingHouseViewer,
    insuranceFund: new Contract(protocol.insuranceFund, insuranceFundJSON as any, signer) as InsuranceFund,
    amms
  }
}

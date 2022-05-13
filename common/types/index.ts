import Big from "big.js"
import { Signer } from "ethers"
import { supportedAmms } from "protocol"
import { Amm } from "../../typechain/Amm"
import { ClearingHouse } from "../../typechain/ClearingHouse"
import { ClearingHouseViewer } from "../../typechain/ClearingHouseViewer"
import { InsuranceFund } from "../../typechain/InsuranceFund"
import { MockERC20 } from "../../typechain/MockERC20"
export * from "./subgraph"

export type AmmName = typeof supportedAmms[number]

export interface TransactionSummary {
  entryPrice: Big
  priceImpact: Big
  fee: Big
  totalCost: Big
  liquidationPrice: Big
}

export interface Transaction extends TransactionSummary {
  direction: Direction
  asset: AmmName
  baseAmount: Big
  quoteAmount: Big
  leverage: number
  hash: string
  error: string
  mined: boolean
}

export enum Direction {
  ADD_TO_AMM = 0,
  REMOVE_FROM_AMM = 1
}

export enum Field {
  Collateral = "Collateral",
  Amount = "Amount"
}

export enum Loading {
  FALSE = 0,
  APPROVE = 1,
  TRADE = 2
}

export enum Tab {
  POSITION_ROW = 0,
  TRADES_ROW = 1,
  FUNDING_ROW = 2
}

type SlippageIndex = 0 | 1 | 2 | 3

export interface SlippageType {
  type: SlippageIndex
  val: string
}

export interface ClosePosMetadata {
  exitAmountOut: Big
  exitPrice: Big
  priceImpact: Big
  fee: Big
}

export interface Position {
  asset: AmmName
  side: "long" | "short"
  size: Big
  leverage: Big
  entryPrice: Big
  liquidationPrice: Big
  margin: Big
  marginRatio: Big
  pnl: Big
}

export interface TransactionContracts {
  usdc: MockERC20
  amms: {
    [key in AmmName]?: Amm
  }
  clearingHouse: ClearingHouse
  clearingHouseViewer: ClearingHouseViewer
  insuranceFund: InsuranceFund
}

export interface Contracts extends TransactionContracts {
  fallback: TransactionContracts
  websocket: {
    clearingHouse: ClearingHouse
    usdc: MockERC20
  }
}

export interface ProtocolGeneralData {
  fundingPeriod: Big
  tollRatio: Big
  spreadRatio: Big
  maxHolding: Big
  maintenanceMarginRatio: Big
}

export interface ProtocolVariableData {
  markPrice: Big
  indexPrice: Big
  volume: Big
  quoteReserve: Big
  baseReserve: Big
  fundingRate: Big
}

export interface ProtocolData {
  currentAmm: AmmName
  generalData: ProtocolGeneralData
  variableData: ProtocolVariableData
}

export interface Balances {
  balance: Big
  usdcBalance: Big
}

export interface BalancesRequest {
  balance: Big | undefined
  usdcBalance: Big | undefined
}

export interface Wallet extends Balances {
  account: string
  chainId: number
  signer: Signer | undefined
  isKeplrWallet: boolean
  keplrWallet: any
  isAuthorized: boolean
}

import Big from "big.js"

export type GraphVariables = { [key: string]: string | number | string[] }

export interface TableRow {
  address: string
  pnl: string
}

export interface TraderDayData {
  trader: Trader
  realizedPnl: Big
}

interface Trader {
  id: string
}

export interface IPositionChangedEvent {
  positionNotional: Big
}

export interface IFundingRateUpdatedEvent {
  rate: Big
  underlyingPrice: Big
  timestamp: number
  amm: string
}

export interface ITradeHistoryEvent {
  exchangedPositionSize: Big
  spotPrice: Big
  timestamp: number
  amm: string
  fee: Big
  realizedPnl: Big
}

export interface Queries {
  tradeHistoryQuery: string
  personalTradeHistoryQuery: string
  volumeQuery: string
  traderDataQuery: string
  fundingHistoryQuery: string
}

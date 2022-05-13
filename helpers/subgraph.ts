import Big from "big.js"
import { GraphVariables, TraderDayData, TableRow } from "common/types"
import { IFundingRateUpdatedEvent, IPositionChangedEvent, ITradeHistoryEvent } from "common/types"
import { request } from "graphql-request"

export const fetchQuery = (query: string, variables: GraphVariables, endpoint: string): Promise<any> => {
  return request(endpoint, query, variables)
}

export const arrangeTradeHistoryEvents = (events: any) => {
  const tradeHistoryEvents: ITradeHistoryEvent[] = events.data.positionChangedEvents.map((data: any) =>
    wrangleTradeHistoryEvents(data)
  )
  return tradeHistoryEvents
}

export const arrangeFundingHistoryEvents = (events: any) => {
  const fundingHistoryEvents: IFundingRateUpdatedEvent[] = events.data.fundingRateUpdatedEvents.map(
    (data: any) => wrangleFundingRateUpdatedEvents(data)
  )
  return fundingHistoryEvents
}

export const wranglePositionChangedEvent = (data: any): IPositionChangedEvent => {
  return {
    ...data,
    positionNotional: Big(data.positionNotional || "0")
  } as IPositionChangedEvent
}

export const wrangleFundingRateUpdatedEvents = (data: any): IFundingRateUpdatedEvent => {
  return {
    ...data,
    rate: Big(data.rate || "0"),
    underlyingPrice: Big(data.underlyingPrice || "0"),
    timestamp: Big(data.timestamp || "0"),
    amm: data.amm
  } as IFundingRateUpdatedEvent
}

export const wrangleTradeHistoryEvents = (data: any): ITradeHistoryEvent => {
  return {
    exchangedPositionSize: Big(data.exchangedPositionSize),
    spotPrice: Big(data.spotPrice),
    timestamp: data.timestamp,
    amm: data.amm,
    fee: Big(data.fee),
    realizedPnl: Big(data.realizedPnl)
  } as ITradeHistoryEvent
}

export const loadTraderDayData = async (
  variables: GraphVariables,
  query: string,
  httpUri: string,
  limit: number,
  skip: number,
  prevData: TraderDayData[],
  setTraderDayData: (traderDayDataInfo: TableRow[]) => void
) => {
  try {
    const fetched = (await fetchQuery(query, { ...variables, limit, skip }, httpUri))
      .traderDayDatas as TraderDayData[]
    prevData = [...prevData, ...fetched]
    if (fetched.length < limit) {
      const aggregated = prevData.reduce((prev, e) => {
        prev[e.trader.id] = Big(e.realizedPnl).add(prev[e.trader.id] || 0)
        return prev
      }, {} as { [key: string]: Big })
      const formed = Object.keys(aggregated).map((key) => ({ address: key, pnl: aggregated[key] }))
      const sorted = formed.sort((a, b) => (b.pnl.gt(a.pnl) ? 1 : -1))

      setTraderDayData(
        sorted.map((e) => ({ ...e, pnl: e.pnl.div(Big(10).pow(18)).toNumber().toLocaleString() }))
      )
    } else {
      loadTraderDayData(variables, query, httpUri, limit, skip + limit, prevData, setTraderDayData)
    }
  } catch (error) {
    console.error("An error occurred in loadTraderDayData():", error)
  }
}

import { Queries } from "common/types"

const queries: Queries = {
  tradeHistoryQuery: `
  subscription getPositionChangedEvents($ammAddr: String!) {
    positionChangedEvents(orderBy: timestamp, orderDirection: desc, where: {amm: $ammAddr}) {
      exchangedPositionSize,
      spotPrice,
      timestamp,
    }
  }
`,
  personalTradeHistoryQuery: `
  subscription getPositionChangedEvents($traderAddr: String!) {
    positionChangedEvents(orderBy: timestamp, orderDirection: desc, where: {trader: $traderAddr}) {
      exchangedPositionSize,
      spotPrice,
      timestamp,
      amm,
      fee,
      realizedPnl,
    }
  }
`,
  volumeQuery: `
  query getPositionChangedEvents($timestamp: String!, $ammAddr: String!) {
    positionChangedEvents(
      where: { timestamp_gt: $timestamp, amm: $ammAddr }
    ) {
      positionNotional
    }
  }
`,
  traderDataQuery: `
  query getTraderDayDatas($date: Int!, $limit: Int!, $skip: Int!) {
    traderDayDatas(first: $limit, skip: $skip, where: {date_gte: $date } ) {
      date
      trader {
        id
      }
      realizedPnl
    }
  }
`,
  fundingHistoryQuery: `
  subscription getFundingRateUpdatedEvents($ammAddr: String!) {
    fundingRateUpdatedEvents(where: {amm: $ammAddr}, orderBy: timestamp, orderDirection:desc) {
      rate,
      underlyingPrice,
      timestamp,
      amm
    }
}
`
}

export default queries

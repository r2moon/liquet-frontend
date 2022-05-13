// import { LEADERBOARD_REFRESH_INTERVAL } from "common/index"
// import { httpUri } from "common/subgraph"
// import { loadTraderDayData } from "helpers/subgraph"
// import { useEffect, useState } from "react"
// import { TableRow } from "common/types"
// import queries from "utils/subgraph/queries"

export const useTraderDayData = () => {
  //   const [traderDayData, setTraderDayData] = useState<TableRow[]>([])
  //   const [loading, setLoading] = useState(true)
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       loadTraderDayData({ date: 1639872000 }, queries.traderDataQuery, httpUri, 1000, 0, [], (data) => {
  //         setTraderDayData(data)
  //         setLoading(false)
  //       })
  //     }, LEADERBOARD_REFRESH_INTERVAL)
  //     return () => clearInterval(interval)
  //   }, [])
  //   return { loading, traderDayData }
}

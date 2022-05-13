import axios from "axios"
import { httpUri } from "common/subgraph"
import { gql } from "@apollo/client"
import { client } from "../../lib/apolloClientConfig"

const http = axios.create({
  baseURL: httpUri
})

export const CANDLE_SUBSCRIPTION = gql`
  subscription ($amm: String!, $interval: Int) {
    candles(first: 1, orderBy: timestamp, orderDirection: desc, where: { amm: $amm, interval: $interval }) {
      id
      timestamp
      interval
      open
      close
      low
      high
      volume
    }
  }
`

const subgraph = {
  getCandles: (amm: any, from: any, to: any, interval: any) => {
    return http.post("", {
      query: `query($amm: Bytes, $to: BigInt, $interval: Int!){
          candles(first: 1000, orderBy: timestamp, orderDirection: desc, where:{amm: $amm, interval: $interval, timestamp_lte: $to }) {
            amm
            timestamp
            interval
            open
            high
            low
            close
            volume
          }
        }`,
      variables: { amm, from, to, interval }
    })
  },
  getLastCandle: (amm: any, interval: any) => {
    return http.post("", {
      query: `query($amm: Bytes, $interval: Int!){
      candles(first:1, orderBy: timestamp, orderDirection: desc, where:{amm: $amm, interval: $interval}) {
      amm
      timestamp
      interval
      open
      high
      low
      close
      volume
    }
  }`,
      variables: { amm, interval }
    })
  }
}

const lastBars = new Map()

const configurationData = {
  supported_resolutions: ["1", "5", "15", "30", "60", "240", "720", "1D", "1W"]
}

// keep track of subscriptions
const _subs: { [key: string]: any } = {}

export const getDatafeed = (selectedToken: string) => {
  return {
    onReady: async (callback: any) => {
      try {
        callback(configurationData)
      } catch (err) {
        console.error(err)
      }
    },
    searchSymbols: (_userInput: any, _exchange: any, _symbolType: any, _onResultReadyCallback: any) => ({}),
    resolveSymbol: async (symbolName: any, onSymbolResolvedCallback: any, onResolveErrorCallback: any) => {
      try {
        const symbol = {
          ticker: symbolName,
          name: `${selectedToken}:USDC`,
          // description: symbolItem.description,
          // type: symbolItem.type,
          session: "24x7",
          timezone: "Etc/UTC",
          //exchange,
          minmov: 1,
          pricescale: 1000,
          has_intraday: true,
          intraday_multipliers: ["1", "5", "15", "30", "60", "240", "720"],
          supported_resolutions: configurationData.supported_resolutions,
          data_status: "streaming"
        }

        onSymbolResolvedCallback(symbol)
      } catch (err) {
        console.error(err)
        onResolveErrorCallback()
      }
    },
    getBars: async (
      symbolInfo: any,
      resolution: any,
      periodParams: any,
      onHistoryCallback: any,
      onErrorCallback: any
    ) => {
      try {
        const { from, to, firstDataRequest } = periodParams

        if (resolution === "1D") resolution = 1440
        else if (resolution === "1W") resolution = 10080

        const response = await subgraph.getCandles(symbolInfo.ticker, from, to, Number(resolution) * 60)
        let bars = []

        if (response?.data?.data?.candles?.length) {
          let candles = response.data.data.candles

          candles = candles.reverse()

          bars = candles.map((candle: any) => ({
            time: Number(candle.timestamp) * 1000,
            open: Number(candle.open) / 1000000000000000000,
            high: Number(candle.high) / 1000000000000000000,
            low: Number(candle.low) / 1000000000000000000,
            close: Number(candle.close) / 1000000000000000000,
            volume: Number(candle.volume) / 1000000000000000000
          }))
        }

        // smoothen the bars by updating close of current bar as open of previous bar
        bars = bars.map((bar: any, index: any, array: any) => {
          if (index + 1 <= array.length - 1) {
            const nextBar = array[index + 1]
            bar.close = nextBar.open
          }
          return bar
        })

        if (bars.length) {
          if (firstDataRequest) lastBars.set(symbolInfo.ticker, bars[bars.length - 1])
          onHistoryCallback(bars, { noData: false })
        } else {
          onHistoryCallback(bars, { noData: true })
        }
      } catch (error) {
        console.error("An error occurred in getBars():", error)
        onErrorCallback(error)
      }
    },

    subscribeBars: async (
      symbolInfo: any,
      resolution: string,
      onRealtimeCallback: any,
      subscribeUID: any,
      _onResetCacheNeededCallback: any
    ) => {
      let coeff = resolution
      if (coeff.includes("D")) {
        // 1 day in minutes === 1440
        coeff = "1440"
      } else if (coeff.includes("W")) {
        // 1 week in minutes === 10080
        coeff = "10080"
      }
      const interval = parseInt(coeff) * 60
      const amm = symbolInfo.ticker

      console.log("[subscribeBars]: Method call with subscribeUID:", subscribeUID)

      _subs[subscribeUID] = client
        .subscribe({
          query: CANDLE_SUBSCRIPTION,
          variables: {
            amm,
            interval: interval
          }
        })
        .subscribe({
          next(data) {
            if (data.data?.candles && data.data?.candles.length > 0) {
              const candle = data.data?.candles[0]
              console.log("---new candle", candle)
              onRealtimeCallback({
                time: Number(candle.timestamp) * 1000,
                open: Number(candle.open) / 1000000000000000000,
                high: Number(candle.high) / 1000000000000000000,
                low: Number(candle.low) / 1000000000000000000,
                close: Number(candle.close) / 1000000000000000000,
                volume: Number(candle.volume) / 1000000000000000000
              })
            }
          },
          error(err) {
            console.error("err", err)
          }
        })
      //   var newSub = {
      //     amm,
      //     uid: subscribeUID,
      //     resolution,
      //     symbolInfo,
      //     lastBar: historyProvider.history[symbolInfo.name].lastBar,
      //     listener: onRealtimeCallback,
      //    }
      //  _subs.push(newSub)

      // const message = {
      //   type: GQL.START,
      //   id: subscribeUID,
      //   payload: {
      //     query: `subscription($amm: Bytes, $interval: Int!){
      //       candles(first:1, orderBy: timestamp, orderDirection: desc, where:{amm: $amm, interval: $interval}) {
      //       amm
      //       timestamp
      //       interval
      //       open
      //       high
      //       low
      //       close
      //       volume
      //     }
      //   }`,
      //     variables: { amm, interval: Number(resolution) * 60 }
      //   }
      // }

      // const response: any = await subgraph.getLastCandle(amm, Number(resolution) * 60);

      // try {
      //   ;(window as any).interval = setInterval(function () {
      //     subgraph
      //       .getLastCandle(amm, Number(resolution) * 60)
      //       .then((response) => {
      //         if (response?.data?.data?.candles?.length) {
      //           const _lastCandle = response.data.data.candles[0]

      //           const lastCandle = {
      //             time: Number(_lastCandle.timestamp) * 1000,
      //             open: Number(_lastCandle.open) / 1000000000000000000,
      //             high: Number(_lastCandle.high) / 1000000000000000000,
      //             low: Number(_lastCandle.low) / 1000000000000000000,
      //             close: Number(_lastCandle.close) / 1000000000000000000,
      //             volume: Number(_lastCandle.volume) / 1000000000000000000
      //           }

      //           onRealtimeCallback(lastCandle)
      //         }
      //       })
      //       .catch((error) => {
      //         console.error("[subscribeBars] Error: ", error)
      //       })
      //   }, 1000 * 2) // 2s update interval, set by polygon block time - 0.4s
      // } catch (error) {
      //   console.error("[subscribeBars] Error: ", error)
      // }

      // subscriptions.set(subscribeUID, {
      //   symbol: symbolInfo.ticker,
      //   resolution,
      //   lastBar: lastBars.get(symbolInfo.ticker),
      //   callback: onRealtimeCallback
      // })
    },
    unsubscribeBars: (subscriberUID: any) => {
      console.log("[unsubscribeBars]: Method call with subscriberUID:", subscriberUID)

      // socket.send(
      //   JSON.stringify({
      //     type: GQL.STOP,
      //     id: subscriberUID
      //   })
      // )

      // subscriptions.delete(subscriberUID)
      // clearInterval((window as any).interval)
      console.log("[unsubscribeBars]: cleared")
      _subs[subscriberUID].unsubscribe()
      _subs[subscriberUID] = null
    }
  }
}

// const { subscriptions } = useSubscriptions()

// export const socket = new WebSocket(
//   "wss://api.thegraph.com/subgraphs/name/ace-contributor/matrix-perpetual",
//   "graphql-ws"
// )

// socket.onopen = (event) => {
//   const message = JSON.stringify({
//     type: GQL.CONNECTION_INIT
//   })

//   socket.send(message)

//   setInterval(() => {
//     if (socket.readyState == 1) {
//       socket.send(
//         JSON.stringify({
//           type: GQL.CONNECTION_INIT
//         })
//       )
//     }
//   }, 10000)
// }

// socket.onmessage = (event) => {
//   const data = JSON.parse(event.data.toString()) // TODO: "toString()" was added. Does this break the old code?

//   switch (data.type) {
//     case GQL.CONNECTION_ACK: {
//       break
//     }
//     case GQL.CONNECTION_ERROR: {
//       console.error(data.payload)
//       break
//     }
//     case GQL.CONNECTION_KEEP_ALIVE: {
//       break
//     }
//     case GQL.DATA: {
//       const sub = subscriptions.get(data.id)

//       if (data.payload.errors) {
//         console.error("An error occurred while the datafeed fetched data:", data.payload.errors[0].message)
//         break
//       }

//       const candle = data.payload.data.candles[0]

//       const bar = {
//         time: Number(candle.timestamp) * 1000,
//         open: Number(candle.open) / 1000000000000000000,
//         high: Number(candle.high) / 1000000000000000000,
//         low: Number(candle.low) / 1000000000000000000,
//         close: Number(candle.close) / 1000000000000000000,
//         volume: Number(candle.volume) / 1000000000000000000
//       }

//       sub.callback(bar)

//       break
//     }
//     case GQL.COMPLETE: {
//       break
//     }
//   }
// }

// socket.onclose = (_) => {}

// socket.onerror = (event) => {
//   console.error("An error occurred in the web socket:", event)
// }

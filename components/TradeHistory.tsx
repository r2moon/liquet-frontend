import { Box, Flex, Text } from "@chakra-ui/react"
import moment from "moment"
import { useAppSelector } from "redux/hooks"
import { useState, useEffect } from "react"
import queries from "utils/subgraph/queries"
import { ITradeHistoryEvent } from "common/types"
import { arrangeTradeHistoryEvents } from "helpers/subgraph"
import { format, fromWei } from "utils/math"
import { gql } from "@apollo/client"
import { client } from "../lib/apolloClientConfig"
import { getContracts } from "utils/ethersContract"

const TradeHistory: React.FC = () => {
  const { signer } = useAppSelector((state) => state.WalletState)
  const { currentAmm } = useAppSelector((state) => state.ProtocolState)
  const [tradeHistoryEvents, setTradeHistoryEvents] = useState<ITradeHistoryEvent[]>([])
  const contracts = getContracts(signer)
  const ammAddr = contracts.amms[currentAmm]!.address

  useEffect(() => {
    const subscription = client
      .subscribe({
        query: gql(queries.tradeHistoryQuery),
        variables: {
          ammAddr
        }
      })
      .subscribe({
        next(data) {
          setTradeHistoryEvents(arrangeTradeHistoryEvents(data))
        },
        error(err) {
          console.error("err", err)
        }
      })

    return () => subscription.unsubscribe()
  }, [ammAddr])

  return (
    <Box className="ms-table__content" h="100%" overflowY="scroll">
      {tradeHistoryEvents.map((t, index) => {
        return (
          <Flex key={index} className={`ms-table__row${index % 2 ? ` ms-table__row--even` : ``}`}>
            <Text
              w="30%"
              textAlign="center"
              className={`${t.exchangedPositionSize.gt(0) ? ` ms-helper__success` : ` ms-helper__warning`}`}
            >
              {format(fromWei(t.exchangedPositionSize), 4)}
            </Text>
            <Text w="30%" textAlign="center">
              {format(fromWei(t.spotPrice))}
            </Text>
            <Text w="40%" textAlign="center">
              {moment(t.timestamp * 1000).format("MM/DD/YYYY hh:mm")}
            </Text>
          </Flex>
        )
      })}
    </Box>
  )
}

export default TradeHistory

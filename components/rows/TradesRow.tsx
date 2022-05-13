import { gql } from "@apollo/client"
import { Box, Flex, Text } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import protocol from "protocol"
import moment from "moment"

import { useAppSelector } from "redux/hooks"
import { ITradeHistoryEvent, AmmName } from "common/types"
import { fromWei } from "utils/math"
import queries from "utils/subgraph/queries"
import { arrangeTradeHistoryEvents } from "helpers/subgraph"
import { client } from "../../lib/apolloClientConfig"
import Translation from "shared/data/translation"

export const TradesRow: React.FC<{ tab: number }> = ({ tab }) => {
  const { account } = useAppSelector((state) => state.WalletState)
  const [tradeHistoryEvents, setTradeHistoryEvents] = useState<ITradeHistoryEvent[]>([])

  useEffect(() => {
    if (!account) return
    const subscription = client
      .subscribe({
        query: gql(queries.personalTradeHistoryQuery),
        variables: {
          traderAddr: account
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
  }, [account])

  return (
    <Flex
      className="ms-table ms-table--card-on-mobile"
      flexDirection="column"
      flex="1"
      overflowY="auto"
      display={tab !== 1 ? "none" : "flex"}
    >
      <Flex
        p="0 1rem 0 0"
        className="ms-table__header ms-helper__not-mobile"
        flexDirection="row"
        justifyContent="space-around"
      >
        <Text fontSize="12px" w="10%" textAlign="left">
          {Translation.en.page.trade.header.time}
        </Text>
        <Text fontSize="12px" w="10%" textAlign="left">
          {Translation.en.page.trade.header.marketPair}
        </Text>
        <Text fontSize="12px" w="10%" textAlign="left">
          {Translation.en.page.trade.header.side}
        </Text>
        <Text fontSize="12px" w="10%" textAlign="left">
          {Translation.en.page.trade.header.posSize}
        </Text>
        <Text fontSize="12px" w="10%" textAlign="left">
          {Translation.en.page.trade.header.price}
        </Text>
        <Text fontSize="12px" w="10%" textAlign="left">
          {Translation.en.page.trade.header.txFee}
        </Text>
        <Text fontSize="12px" w="10%" textAlign="left">
          {Translation.en.page.trade.header.realizedPnl}
        </Text>
      </Flex>
      <Box className="ms-table__content" h="100%" overflowY="scroll">
        {tradeHistoryEvents.map((trade, index) => {
          return (
            <Flex
              key={index}
              className={`ms-table__row${index % 2 ? ` ms-table__row--even` : ``}`}
              flexDirection="row"
              justifyContent="space-around"
            >
              <Text fontSize="12px" w="10%" textAlign="left">
                <label className="ms-helper__only-mobile">{Translation.en.page.trade.header.time}</label>
                {moment(trade.timestamp * 1000).format("MM/DD/YYYY hh:mm")}
              </Text>
              <Text fontSize="12px" w="10%" textAlign="left">
                <label className="ms-helper__only-mobile">
                  {Translation.en.page.trade.header.marketPair}
                </label>
                {`${getTokenFromAmmAddr(trade.amm)}-USDC`}
              </Text>
              <Text
                fontSize="12px"
                w="10%"
                textAlign="left"
                color={+Number(fromWei(trade.exchangedPositionSize).toString()) > 0 ? "green.400" : "red.400"}
              >
                <label className="ms-helper__only-mobile">{Translation.en.page.trade.header.side}</label>
                {fromWei(trade.exchangedPositionSize).gt(0) ? "Long" : "Short"}
              </Text>
              <Text fontSize="12px" w="10%" textAlign="left">
                <label className="ms-helper__only-mobile">{Translation.en.page.trade.header.posSize}</label>
                {Number(fromWei(trade.exchangedPositionSize).toString()).toFixed(4)}
              </Text>
              <Text fontSize="12px" w="10%" textAlign="left">
                <label className="ms-helper__only-mobile">{Translation.en.page.trade.header.price}</label>
                {Number(fromWei(trade.spotPrice).toString()).toFixed(4)}
              </Text>
              <Text fontSize="12px" w="10%" textAlign="left">
                <label className="ms-helper__only-mobile">{Translation.en.page.trade.header.txFee}</label>
                {Number(fromWei(trade.fee).toString()).toFixed(4)}
              </Text>
              <Text fontSize="12px" w="10%" textAlign="left">
                <label className="ms-helper__only-mobile">
                  {Translation.en.page.trade.header.realizedPnl}
                </label>
                {Number(fromWei(trade.realizedPnl).toString()).toFixed(4)}
              </Text>
            </Flex>
          )
        })}
      </Box>
    </Flex>
  )
}

function getTokenFromAmmAddr(ammAddr: string) {
  const amms = protocol.amms
  const token = Object.keys(amms).find(
    (ammName) => amms[ammName as AmmName].toLowerCase() === ammAddr.toLowerCase()
  )
  return token ?? ""
}

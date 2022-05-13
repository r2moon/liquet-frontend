import { gql } from "@apollo/client"
import { Box, Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import moment from "moment"

import { useAppSelector } from "redux/hooks"
import { arrangeFundingHistoryEvents } from "helpers/subgraph"
import { IFundingRateUpdatedEvent } from "common/types"
import { client } from "../../lib/apolloClientConfig"
import { fromWei, format } from "utils/math"
import queries from "utils/subgraph/queries"
import Translation from "shared/data/translation"
import { getContracts } from "utils/ethersContract"

export const FundingPaymentRow: React.FC<{ tab: number }> = ({ tab }) => {
  const [fundingHistoryEvents, setFundingHistoryEvents] = useState<IFundingRateUpdatedEvent[]>([])
  const { signer } = useAppSelector((state) => state.WalletState)
  const { currentAmm } = useAppSelector((state) => state.ProtocolState)
  const contracts = getContracts(signer)
  const ammAddr = contracts.amms[currentAmm]!.address

  useEffect(() => {
    const subscription = client
      .subscribe({
        query: gql(queries.fundingHistoryQuery),
        variables: { ammAddr }
      })
      .subscribe({
        next(data) {
          setFundingHistoryEvents(arrangeFundingHistoryEvents(data))
        },
        error(err) {
          console.error("err", err)
        }
      })

    return () => subscription.unsubscribe()
  })

  return (
    <Flex
      className="ms-table ms-table--card-on-mobile"
      flexDirection="column"
      flex="1"
      overflowY="auto"
      display={tab !== 2 ? "none" : "flex"}
    >
      <Flex
        className="ms-table__header ms-helper__not-mobile"
        flexDirection="row"
        justifyContent="space-around"
      >
        <Box w="25%" textAlign="center">
          <Text fontSize="12px">{Translation.en.page.trade.header.time}</Text>
        </Box>
        <Box w="25%" textAlign="center">
          <Text fontSize="12px">{Translation.en.page.trade.header.marketPair}</Text>
        </Box>
        <Box w="25%" textAlign="center">
          <Text fontSize="12px">{Translation.en.page.trade.header.fundingRate}</Text>
        </Box>
        <Box w="25%" textAlign="center">
          <Text fontSize="12px">{Translation.en.page.trade.header.price}</Text>
        </Box>
      </Flex>
      <Box className="ms-table__content" flexDirection="column" overflowY="auto">
        {fundingHistoryEvents.map((f, index) => {
          return (
            <Flex
              key={index}
              className={`ms-table__row${index % 2 ? ` ms-table__row--even` : ``}`}
              flexDirection="row"
              justifyContent="space-around"
            >
              <Box w="25%" textAlign="center">
                <label className="ms-helper__only-mobile">{Translation.en.page.trade.header.time}</label>
                <Text fontSize="12px">{moment(f.timestamp * 1000).format("MM/DD/YYYY hh:mm")}</Text>
              </Box>
              <Box w="25%" textAlign="center">
                <label className="ms-helper__only-mobile">
                  {Translation.en.page.trade.header.marketPair}
                </label>
                <Text fontSize="12px">{`${currentAmm}-USDC`}</Text>
              </Box>
              <Box w="25%" textAlign="center">
                <label className="ms-helper__only-mobile">
                  {Translation.en.page.trade.header.fundingRate}
                </label>
                <Text fontSize="12px">{format(fromWei(f.rate).mul(100), 4)}%</Text>
              </Box>
              <Box w="25%" textAlign="center">
                <label className="ms-helper__only-mobile">{Translation.en.page.trade.header.price}</label>
                <Text fontSize="12px">{Number(fromWei(f.underlyingPrice).toString()).toFixed(4)}</Text>
              </Box>
            </Flex>
          )
        })}
      </Box>
    </Flex>
  )
}

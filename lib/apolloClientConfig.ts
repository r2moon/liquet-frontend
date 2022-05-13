import { InMemoryCache, HttpLink, split } from "@apollo/client"
import { ApolloClient } from "@apollo/client/core"
import { getMainDefinition } from "@apollo/client/utilities"
import { WebSocketLink } from "@apollo/client/link/ws"
import { httpUri, wsUri } from "common/subgraph"

const httpLink = new HttpLink({
  uri: httpUri
})

const wsLink = process.browser
  ? new WebSocketLink({
      uri: wsUri,
      options: {
        reconnect: true
      }
    })
  : undefined

const splitLink = process.browser
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query)
        return definition.kind === "OperationDefinition" && definition.operation === "subscription"
      },
      wsLink!,
      httpLink
    )
  : httpLink

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
})

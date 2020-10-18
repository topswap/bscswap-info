import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://testnet-subgraph.bscswap.com/subgraphs/name/bscswap/bscswap-subgraph'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://testnet-subgraph.bscswap.com/index-node/graphql'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://testnet-subgraph.bscswap.com/subgraphs/name/bscswap/bsc-blocks-timestamp'
  }),
  cache: new InMemoryCache()
})

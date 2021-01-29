import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://subgraph.baflabs.com/subgraphs/name/topswap/topswap-subgraph'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.baflabs.com/graphql'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})


// TODO bsc-blocks later
export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://subgraph.bscswap.com/subgraphs/name/bscswap/bsc-blocks'
  }),
  cache: new InMemoryCache()
})

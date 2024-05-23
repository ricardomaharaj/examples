import { ReactNode } from 'react'
import { Provider, cacheExchange, createClient, fetchExchange } from 'urql'

// https://commerce.nearform.com/open-source/urql/docs/basics/react-preact/#setting-up-the-client
const client = createClient({
  url: '/api/gql',
  exchanges: [cacheExchange, fetchExchange],
})

// https://commerce.nearform.com/open-source/urql/docs/basics/react-preact/#providing-the-client
export function Urql({ children }: { children: ReactNode }) {
  return <Provider value={client}>{children}</Provider>
}

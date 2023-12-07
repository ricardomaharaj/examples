import { createClient, cacheExchange, fetchExchange, Provider } from 'urql'

const client = createClient({
  url: '/api/gql',
  exchanges: [cacheExchange, fetchExchange],
})

export const Urql = ({ children }: { children: JSX.Element }) => (
  <Provider value={client}>{children}</Provider>
)

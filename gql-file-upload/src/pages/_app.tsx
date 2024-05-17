import type { AppProps } from 'next/app'
import {
  cacheExchange,
  createClient,
  fetchExchange,
  Provider as Urql,
} from 'urql'

const client = createClient({
  url: '/api/gql',
  exchanges: [cacheExchange, fetchExchange],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Urql value={client}>
        <Component {...pageProps} />
      </Urql>
    </>
  )
}

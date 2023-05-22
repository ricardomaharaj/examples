import type { AppProps } from 'next/app'
import {
  Provider as Urql,
  createClient as createUrql,
  fetchExchange,
} from 'urql'
import '~/styles/tw.css'
import { graphCache } from '~/util/graph-cache'

const urql = createUrql({
  url: '/api/gql',
  exchanges: [graphCache, fetchExchange],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Urql value={urql}>
      <Component {...pageProps} />
    </Urql>
  )
}

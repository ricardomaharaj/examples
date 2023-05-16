import { type AppProps } from 'next/app'
import {
  createClient as createUrql,
  Provider as UrqlProvider,
  cacheExchange,
  fetchExchange,
} from 'urql'

const urql = createUrql({
  url: '/api/gql',
  exchanges: [cacheExchange, fetchExchange],
})

const App = (props: AppProps) => {
  const { Component, pageProps } = props
  return (
    <UrqlProvider value={urql}>
      <Component {...pageProps} />
    </UrqlProvider>
  )
}

export default App

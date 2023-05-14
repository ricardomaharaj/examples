import type { AppProps } from 'next/app'
import {
  createClient as createUrql,
  Provider as UrqlProvider,
  fetchExchange,
} from 'urql'
import { graphCache } from '~/util/graph-cache'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import { Header } from '~/comps/header'

type SessionProp = {
  session: Session
}

const urql = createUrql({
  url: '/api/gql',
  exchanges: [graphCache, fetchExchange],
})

function App(props: AppProps<SessionProp>) {
  const { Component, pageProps } = props
  const { session } = pageProps

  return (
    <SessionProvider session={session}>
      <UrqlProvider value={urql}>
        <Header />
        <Component {...pageProps} />
      </UrqlProvider>
    </SessionProvider>
  )
}

export default App

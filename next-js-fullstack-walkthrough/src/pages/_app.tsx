import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Header } from '~/comps/header/header'
import '~/styles/globals.css'
import { Urql } from '~/util/urql'

export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {
  return (
    // https://next-auth.js.org/v3/getting-started/example#add-session-state
    <SessionProvider session={pageProps.session}>
      {/* https://commerce.nearform.com/open-source/urql/docs/basics/react-preact/#providing-the-client */}
      <Urql>
        <Header />
        <Component {...pageProps} />
      </Urql>
    </SessionProvider>
  )
}

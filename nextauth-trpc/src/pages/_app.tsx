import type { AppType, AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Header } from '@/comps/header'
import { TRPC } from '@/util/trpc'
import '@/styles/globals.css'

const App: AppType = (props: AppProps) => {
  const { Component, pageProps } = props
  const { session } = pageProps
  return (
    <>
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default TRPC.withTRPC(App)

import type { AppType, AppProps } from 'next/app'
import '@/styles/globals.css'
import { TRPC } from '@/util/trpc'

const App: AppType = (props: AppProps) => {
  const { Component, pageProps } = props
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default TRPC.withTRPC(App)

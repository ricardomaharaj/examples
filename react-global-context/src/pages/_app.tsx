import { GlobalCtxProvider } from '@/state/global'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalCtxProvider>
        <Component {...pageProps} />
      </GlobalCtxProvider>
    </>
  )
}

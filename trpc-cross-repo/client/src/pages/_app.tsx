import '@/styles/globals.css'
import { TRPC } from '@/trpc'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TRPC>
        <Component {...pageProps} />
      </TRPC>
    </>
  )
}

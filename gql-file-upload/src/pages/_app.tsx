import type { AppProps } from 'next/app'
import { Urql } from '~/lib/urql'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Urql>
        <Component {...pageProps} />
      </Urql>
    </>
  )
}

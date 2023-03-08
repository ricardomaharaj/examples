import '@/styles/globals.css'
import { trpc } from '@/util/trpc'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='col m-2'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default trpc.withTRPC(App)

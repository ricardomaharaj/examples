import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src='/captcha-callback.js' />
      <Script src='https://www.google.com/recaptcha/api.js' async defer />
      <Component {...pageProps} />
    </>
  )
}

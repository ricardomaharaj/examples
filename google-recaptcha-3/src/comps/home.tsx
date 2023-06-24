export function Home() {
  return (
    <>
      <form action='/api/recaptcha' method='POST' id='contact-form'>
        <button
          type='submit'
          className='g-recaptcha'
          data-sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_CLIENT_KEY}
          data-callback='captchaCallback'
          data-action='submit'
        >
          Submit
        </button>
      </form>
      <div id='captcha-response'></div>
    </>
  )
}

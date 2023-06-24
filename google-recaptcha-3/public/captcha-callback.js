async function captchaCallback(token) {
  try {
    const response = await fetch('/api/recaptcha', {
      method: 'POST',
      body: JSON.stringify({ token }),
    })
    const { status } = response
    if (status !== 200) {
      document.querySelector('#captcha-response').innerHTML = 'Error'
    } else {
      document.querySelector('#captcha-response').innerHTML = 'Success'
    }
  } catch (error) {
    document.querySelector('#captcha-response').innerHTML = 'Error'
  }
}

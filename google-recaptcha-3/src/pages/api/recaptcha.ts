import axios from 'axios'
import type { NextApiHandler } from 'next'
import z from 'zod'

const { RECAPTCHA_SECRET_KEY } = z
  .object({ RECAPTCHA_SECRET_KEY: z.string() })
  .parse(process.env)

const handler: NextApiHandler = async (req, res) => {
  z.enum(['POST']).parse(req.method)

  const body = JSON.parse(req.body)
  const { token } = z.object({ token: z.string() }).parse(body)

  const response = await axios.post(
    'https://www.google.com/recaptcha/api/siteverify',
    null,
    {
      params: {
        secret: RECAPTCHA_SECRET_KEY,
        response: token,
      },
    },
  )

  const { success } = z
    .object({
      success: z.coerce.boolean(),
    })
    .parse(response.data)

  if (!success) {
    res.status(401).send(401)
    return
  }

  res.status(200).send('OK')
  return
}

export default handler

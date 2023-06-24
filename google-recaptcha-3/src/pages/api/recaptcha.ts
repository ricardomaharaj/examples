import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import z from 'zod'

const { GOOGLE_RECAPTCHA_SECRET } = z
  .object({
    GOOGLE_RECAPTCHA_SECRET: z.string().nonempty(),
  })
  .parse(process.env)

async function handler(req: NextApiRequest, res: NextApiResponse) {
  z.enum(['POST']).parse(req.method)

  const body = JSON.parse(req.body)
  const { token } = z
    .object({
      token: z.string().nonempty(),
    })
    .parse(body)

  const response = await axios.post(
    'https://www.google.com/recaptcha/api/siteverify',
    null,
    {
      params: {
        secret: GOOGLE_RECAPTCHA_SECRET,
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

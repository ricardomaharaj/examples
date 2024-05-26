import axios from 'axios'
import { NextApiHandler } from 'next'
import { env } from '~/server/env'

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') throw Error()

  const body = JSON.parse(req.body)
  const token = body?.token as string | undefined

  if (!token) throw Error()

  const response = await axios.post(
    'https://www.google.com/recaptcha/api/siteverify',
    null,
    {
      params: {
        secret: env.RECAPTCHA_SECRET_KEY,
        response: token,
      },
    },
  )

  const success = response.data?.success as boolean | undefined

  if (!success) {
    res.status(401).send(401)
    return
  }

  res.status(200).send('OK')
  return
}

export default handler

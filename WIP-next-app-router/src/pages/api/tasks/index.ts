import { NextApiHandler } from 'next'
import { Tasks } from '~/prisma'

const handler: NextApiHandler = async (req, res) => {
  const method = req.method

  if (method === 'POST') {
    const { body } = req.body
    await Tasks.create({ data: { body } })
    res.send('OK')
  }

  return res.send('OK')
}

export default handler

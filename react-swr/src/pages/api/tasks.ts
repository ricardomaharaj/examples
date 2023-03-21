import { prisma } from '@/prisma'
import type { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  const { method } = req

  if (method === 'GET') {
    const tasks = await prisma.task.findMany()
    return res.json(tasks)
  }

  if (method === 'POST') {
    const { body } = req.body
    await prisma.task.create({ data: { body } })
    return res.json(true)
  }

  return res.status(501).send('501')
}

export default handler

import { prisma } from '@/prisma'
import type { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  const { method } = req
  const id = req.query.id as string

  if (method === 'PATCH') {
    const { body } = req.body
    await prisma.task.update({ data: { body }, where: { id } })
    return res.json(true)
  }

  if (method === 'DELETE') {
    await prisma.task.delete({ where: { id } })
    return res.json(true)
  }

  return res.status(501).send('501')
}

export default handler

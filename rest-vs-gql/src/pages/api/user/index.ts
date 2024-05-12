import { NextApiHandler } from 'next'
import { prisma } from '~/server/prisma'

const handler: NextApiHandler = async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
}

export default handler

import { NextApiHandler } from 'next'
import { prisma } from '~/server/prisma'

const handler: NextApiHandler = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.query.id as string },
    include: { tasks: true },
  })

  res.json(user?.tasks.at(0))
}

export default handler

import { NextApiHandler } from 'next'
import { Tasks } from '~/prisma'

const handler: NextApiHandler = async (req, res) => {
  const method = req.method
  const id = req.query.id as string

  if (method === 'PATCH') {
    const { body } = req.body

    await Tasks.update({
      where: { id },
      data: { body },
    })

    return res.send('OK')
  }

  if (method === 'DELETE') {
    await Tasks.delete({
      where: { id },
    })

    return res.send('OK')
  }

  return res.send('OK')
}

export default handler

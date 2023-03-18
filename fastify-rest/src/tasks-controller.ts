import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import { prisma } from './prisma.js'

type ReqData = Record<string, string>

export const tasksController = (
  fast: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void,
) => {
  fast.get('/', async (req, res) => {
    return await prisma.task.findMany()
  })

  fast.get('/:id', async (req, res) => {
    const { id } = req.params as ReqData
    return await prisma.task.findUniqueOrThrow({ where: { id } })
  })

  fast.post('/', async (req, res) => {
    const { body } = req.body as ReqData
    await prisma.task.create({ data: { body } })
    return true
  })

  fast.patch('/:id', async (req, res) => {
    const { id } = req.params as ReqData
    const { body } = req.body as ReqData
    await prisma.task.update({ data: { body }, where: { id } })
    return true
  })

  fast.delete('/:id', async (req, res) => {
    const { id } = req.params as ReqData
    await prisma.task.delete({ where: { id } })
    return true
  })
  done()
}

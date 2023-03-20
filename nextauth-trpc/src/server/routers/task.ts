import { z } from 'zod'
import { prisma } from '../prisma'
import { authProcedure, createTRPCRouter } from '../trpc'

export const taskRouter = createTRPCRouter({
  getAll: authProcedure.query(async (req) => {
    const { user } = req.ctx.session
    return await prisma.task.findMany({ where: { userId: user.id } })
  }),
  create: authProcedure
    .input(
      z.object({
        body: z.string(),
      }),
    )
    .mutation(async (req) => {
      const { body } = req.input
      const { user } = req.ctx.session
      await prisma.task.create({ data: { body, userId: user.id } })
      return true
    }),
  update: authProcedure
    .input(
      z.object({
        id: z.string(),
        body: z.string(),
      }),
    )
    .mutation(async (req) => {
      const { id, body } = req.input
      await prisma.task.update({ where: { id }, data: { body } })
    }),
  delete: authProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async (req) => {
      const { id } = req.input
      await prisma.task.delete({ where: { id } })
    }),
})

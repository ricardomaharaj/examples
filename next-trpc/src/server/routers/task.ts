import { z } from 'zod'
import { prisma } from '../prisma'
import { createTRPCRouter, publicProcedure } from '../trpc'

export const taskRouter = createTRPCRouter({
  getAll: publicProcedure.query(async (req) => {
    return await prisma.task.findMany()
  }),
  create: publicProcedure
    .input(
      z.object({
        body: z.string(),
      }),
    )
    .mutation(async (req) => {
      const { body } = req.input
      await prisma.task.create({ data: { body } })
      return true
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        body: z.string(),
      }),
    )
    .mutation(async (req) => {
      const { id, body } = req.input
      await prisma.task.update({ data: { body }, where: { id } })
      return true
    }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async (req) => {
      const { id } = req.input
      await prisma.task.delete({ where: { id } })
      return true
    }),
})

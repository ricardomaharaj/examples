import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { prisma } from '../prisma.js'
import { publicProcedure, router } from '../trpc.js'

export const taskRouter = router({
  getAll: publicProcedure.query(async (req) => {
    return await prisma.task.findMany()
  }),
  getOne: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async (req) => {
      const { id } = req.input
      const t = await prisma.task.findUnique({ where: { id } })
      if (!t) throw new TRPCError({ code: 'NOT_FOUND' })
      return t
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
      const task = await prisma.task.findUnique({ where: { id } })
      if (!task) throw new TRPCError({ code: 'NOT_FOUND' })
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
      const task = await prisma.task.findUnique({ where: { id } })
      if (!task) throw new TRPCError({ code: 'NOT_FOUND' })
      await prisma.task.delete({ where: { id } })
      return true
    }),
})

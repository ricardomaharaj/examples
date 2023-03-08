import { z } from 'zod'
import { task } from '../repos/task'
import { proc, router } from '../trpc'

export const taskRouter = router({
  getAll: proc.query(async () => {
    return await task.find()
  }),
  getOne: proc.input(z.object({ id: z.string() })).query(async ({ input }) => {
    return await task.findOneBy({ id: input.id })
  }),
  create: proc
    .input(z.object({ task: z.string() }))
    .mutation(async ({ input }) => {
      const newTask = task.create({ task: input.task })
      await task.save(newTask)
      return true
    }),
  update: proc
    .input(z.object({ id: z.string(), task: z.string() }))
    .mutation(async ({ input }) => {
      await task.findOneByOrFail({ id: input.id })
      await task.update({ id: input.id }, { task: input.task })
      return true
    }),
  delete: proc
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      await task.findOneByOrFail({ id: input.id })
      await task.delete({ id: input.id })
      return true
    }),
})

import { router } from '../trpc.js'
import { taskRouter } from './task.js'

export const appRouter = router({
  task: taskRouter,
})

export type AppRouter = typeof appRouter

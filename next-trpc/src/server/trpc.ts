import { initTRPC } from '@trpc/server'
import superjson from 'superjson'

const t = initTRPC.create({
  transformer: superjson,
})

export const createTRPCRouter = t.router
export const createTRPCMiddleware = t.middleware
export const publicProcedure = t.procedure

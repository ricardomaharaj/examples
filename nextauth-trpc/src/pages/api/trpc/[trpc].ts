import { appRouter } from '@/server/routers/_app'
import { createTRPCContext } from '@/server/trpc'
import { createNextApiHandler } from '@trpc/server/adapters/next'

export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
})

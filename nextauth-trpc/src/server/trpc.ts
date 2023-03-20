import { initTRPC, TRPCError } from '@trpc/server'
import { CreateNextContextOptions } from '@trpc/server/adapters/next'
import { getSession } from 'next-auth/react'
import superjson from 'superjson'

export async function createTRPCContext({
  req,
  res,
}: CreateNextContextOptions) {
  const session = await getSession({ req })
  return {
    session,
  }
}

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
})

export const createTRPCRouter = t.router
export const createTRPCMiddleware = t.middleware
export const publicProcedure = t.procedure

const requireAuth = createTRPCMiddleware(async ({ ctx, next }) => {
  if (!ctx.session) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }
  return next({
    ctx: {
      session: ctx.session,
    },
  })
})

export const authProcedure = t.procedure.use(requireAuth)

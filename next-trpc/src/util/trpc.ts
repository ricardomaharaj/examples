import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import superjson from 'superjson'
import { AppRouter } from '@/server/routers/_app'

export const TRPC = createTRPCNext<AppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [httpBatchLink({ url: 'http://localhost:3000/api/trpc' })],
    }
  },
})

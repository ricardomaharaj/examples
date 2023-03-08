import { AppRouter } from '@/server/routers/_app'
import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import SuperJSON from 'superjson'

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      transformer: SuperJSON,
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/api/trpc',
        }),
      ],
    }
  },
})

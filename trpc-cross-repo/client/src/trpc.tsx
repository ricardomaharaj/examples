import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createTRPCReact } from '@trpc/react-query'
import { httpBatchLink } from '@trpc/client'
import SuperJSON from 'superjson'
import { ReactNode, useState } from 'react'
import { AppRouter } from '../../server/src/routers/root'

export const api = createTRPCReact<AppRouter>()

export function TRPC(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:4000',
        }),
      ],
      transformer: SuperJSON,
    }),
  )
  return (
    <>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          {props.children}
        </QueryClientProvider>
      </api.Provider>
    </>
  )
}

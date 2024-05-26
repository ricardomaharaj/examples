import { cacheExchange as createGraphCache } from '@urql/exchange-graphcache'
import { ReactNode } from 'react'
import { Provider, createClient, fetchExchange } from 'urql'
import { tasksQuery } from '~/gql/queries/tasks'
import { Task } from '~/types/gql'

const graphCache = createGraphCache({
  updates: {
    Mutation: {
      createTask: (result: { createTask: Task }, args, cache, info) => {
        cache.updateQuery({ query: tasksQuery }, (data) => {
          if (!data) return null
          return {
            ...data,
            tasks: [...data.tasks, result.createTask as Task],
          }
        })
      },
    },
  },
})

const client = createClient({
  url: '/api/gql',
  exchanges: [graphCache, fetchExchange],
})

export const Urql = ({ children }: { children: ReactNode }) => (
  <Provider value={client}>{children}</Provider>
)

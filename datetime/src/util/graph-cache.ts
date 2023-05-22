import { Task } from '@prisma/client'
import { cacheExchange as createGraphCache } from '@urql/exchange-graphcache'

export const graphCache = createGraphCache({
  resolvers: {
    Task: {
      dueDate: ({ dueDate }: Task) => (dueDate ? new Date(dueDate) : null),
      createdAt: ({ createdAt }: Task) => new Date(createdAt),
      updatedAt: ({ updatedAt }: Task) => new Date(updatedAt),
    },
  },
})

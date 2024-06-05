import { createYoga } from 'graphql-yoga'
import { env } from '~/server/env'
import { schema } from '~/server/gql/schema'

export const yoga = createYoga({
  schema: schema,
  graphqlEndpoint: '/api/gql',
  graphiql: env.NODE_ENV === 'development',
})

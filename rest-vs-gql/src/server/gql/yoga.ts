import { createYoga } from 'graphql-yoga'
import { schema } from '~/server/gql/schema'

export const yoga = createYoga({
  schema: schema,
  graphqlEndpoint: '/api/gql',
})

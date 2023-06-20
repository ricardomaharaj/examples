import { createYoga } from 'graphql-yoga'
import { env } from '~/env'
import { schema } from '~/server/schema'
import { Yoga } from '~/types/yoga'

const yoga = createYoga<Yoga>({
  schema: schema,
  graphiql: env.NODE_ENV === 'development',
  graphqlEndpoint: '/api/gql',
})

export default yoga

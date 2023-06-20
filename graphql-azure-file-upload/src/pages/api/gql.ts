import { createYoga } from 'graphql-yoga'
import type { PageConfig } from 'next'
import { env } from '~/env'
import { schema } from '~/server/schema'
import type { Yoga } from '~/types/yoga'

export const config: PageConfig = { api: { bodyParser: false } }

const yoga = createYoga<Yoga>({
  schema: schema,
  graphiql: env.NODE_ENV === 'development',
  graphqlEndpoint: '/api/gql',
})

export default yoga

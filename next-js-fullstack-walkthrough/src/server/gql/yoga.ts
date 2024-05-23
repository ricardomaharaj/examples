import { createYoga } from 'graphql-yoga'
import { getSession } from '~/server/auth'
import { schema } from '~/server/gql/schema'
import { GQLError } from '~/server/util/gql-error'
import { YogaServerContext } from '~/types/yoga'

// https://the-guild.dev/graphql/yoga-server/docs
export const yoga = createYoga<YogaServerContext>({
  schema: schema,
  graphiql: process.env.NODE_ENV === 'development',
  graphqlEndpoint: '/api/gql',
  context: async ({ req, res }) => {
    const session = await getSession({ req, res })
    if (!session) throw GQLError('Unauthorized')
    return { user: session.user }
  },
})

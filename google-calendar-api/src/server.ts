import { createSchema, createYoga } from 'graphql-yoga'
import { createServer } from 'http'
import { env } from '~/env'
import { createEvent, listEvents } from '~/google'

const typeDefs = /* GraphQL */ `
  scalar Any

  type Query {
    listEvents: Any
  }

  type Mutation {
    createEvent(organizerEmail: String!, attendeeEmail: String!): Any
  }
`

const schema = createSchema({
  typeDefs: typeDefs,
  resolvers: {
    Query: {
      listEvents: async function () {
        const events = await listEvents()
        return events
      },
    },
    Mutation: {
      createEvent: async function (
        parent,
        args: {
          organizerEmail: string
          attendeeEmail: string
        },
      ) {
        return await createEvent({
          organizerEmail: args.organizerEmail,
          attendeeEmail: args.attendeeEmail,
        })
      },
    },
  },
})

const yoga = createYoga({
  schema: schema,
  graphqlEndpoint: '/',
})

const server = createServer(yoga)
server.listen({ port: env.PORT })

console.log(`http://localhost:${env.PORT}/`)

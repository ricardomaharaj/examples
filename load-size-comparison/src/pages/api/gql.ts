import { createSchema, createYoga } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'node:fs'

type Yoga = {
  req: NextApiRequest
  res: NextApiResponse
}

const schema = createSchema<Yoga>({
  typeDefs: fs.readFileSync('./gql/schema.gql').toString('utf8'),
  resolvers: {
    Query: {
      now: () => new Date().toString(),
    },
  },
})

const yoga = createYoga<Yoga>({
  schema,
  graphqlEndpoint: '/api/gql',
  context: async () => ({}),
})

export default yoga

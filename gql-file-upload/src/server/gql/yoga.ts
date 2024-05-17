import { createSchema, createYoga } from 'graphql-yoga'
import fs from 'node:fs'

const schema = createSchema({
  typeDefs: fs.readFileSync('./gql/schema.gql').toString('utf-8'),
  resolvers: {
    Query: {
      now: () => Date.now(),
    },
    Mutation: {
      uploadFile: async (parent, args, ctx, info) => {
        const file: File = args.file
        console.log(file)
        return true
      },
    },
  },
})

const yoga = createYoga({
  schema,
  graphqlEndpoint: '/api/gql',
})

export default yoga

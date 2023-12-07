import { createSchema, createYoga } from 'graphql-yoga'

const schema = createSchema({
  typeDefs: /* GraphQL */ `
    scalar File

    type Query {
      now: String
    }

    type Mutation {
      uploadFile(file: File): Boolean
    }
  `,
  resolvers: {
    Query: {
      now: () => Date.now(),
    },
    Mutation: {
      uploadFile: async (parent, args, ctx, info) => {
        const file: File = args.file
        console.log({ file })
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

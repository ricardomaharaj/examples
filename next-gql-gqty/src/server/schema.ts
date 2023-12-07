import { createSchema } from 'graphql-yoga'
import { prisma } from '~/server/prisma'
import fs from 'node:fs'

const typeDefs = fs.readFileSync('./gql/schema.gql').toString('utf-8')

export const schema = createSchema({
  typeDefs: typeDefs,
  resolvers: {
    Query: {
      tasks: async () => await prisma.task.findMany({}),
    },
    Mutation: {
      createTask: async () => await prisma.task.create({ data: {} }),
    },
  },
})

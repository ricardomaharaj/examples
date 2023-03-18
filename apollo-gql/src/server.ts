import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import fs from 'node:fs'
import { tasksResolver } from './tasks-resolver.js'

const typeDefs = fs
  .readFileSync('./schema.gql', { encoding: 'utf-8' })
  .toString()

const resolvers = {
  Query: {
    ...tasksResolver.Query,
  },
  Mutation: {
    ...tasksResolver.Mutation,
  },
}

const apollo = new ApolloServer({ typeDefs, resolvers })

const { url } = await startStandaloneServer(apollo, { listen: { port: 4000 } })
console.log(url)

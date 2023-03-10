import fs from 'node:fs'

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { tasks } from './resolvers/tasks.js'

import { sequelize } from './db/db.js'
import { env } from './env.js'
import { Logger } from './util/logger.js'

await sequelize.sync()

const typeDefs = fs
  .readFileSync('./schema.gql', {
    encoding: 'utf-8'
  })
  .toString()

const resolvers = {
  Query: {
    ...tasks.Query
  },
  Mutation: {
    ...tasks.Mutation
  }
}

const apollo = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(apollo, {
  listen: { port: env.PORT }
})

Logger.info(url)

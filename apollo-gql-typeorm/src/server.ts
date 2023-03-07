import fs from 'node:fs'

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { db } from './db/db.js'
import { env } from './env.js'
import { task } from './resolvers/tasks.js'
import { Logger } from './util/logger.js'

db.initialize()
  .then(() => Logger.info('db connected'))
  .catch((err) => Logger.error(`${err}`))

const typeDefs = fs
  .readFileSync('./schema.gql', { encoding: 'utf-8' })
  .toString()

const resolvers = {
  Query: {
    ...task.Query
  },
  Mutation: {
    ...task.Mutation
  }
}

const apollo = new ApolloServer({ typeDefs, resolvers })

const { url } = await startStandaloneServer(apollo, {
  listen: { port: env.PORT }
})

Logger.info(url)

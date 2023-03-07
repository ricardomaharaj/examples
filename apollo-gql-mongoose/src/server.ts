import fs from 'node:fs'

import mongoose from 'mongoose'

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { tasks } from './resolvers/tasks.js'

import { env } from './env.js'
import { Logger } from './util/logger.js'

mongoose
  .connect(env.MONGO)
  .then(() => Logger.info('connected to mongodb'))
  .catch((err) => Logger.error(`${err}`))

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

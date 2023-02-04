import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import mongoose from 'mongoose'
import { readFileSync } from 'fs'
import { Todo } from './todo'
import { ENV } from './env'

mongoose.connect(ENV.MONGO!)

const typeDefs = readFileSync(`${__dirname}/../src/schema.gql`, {
  encoding: 'utf-8'
}).toString()

type Resolver = (_: any, args: any) => Promise<any>

const todos: Resolver = async (_, args) => {
  return await Todo.find()
}

const todo: Resolver = async (_, args) => {
  return await Todo.findById(args.id)
}

const createTodo: Resolver = async (_, args) => {
  await Todo.create({ task: args.task })
  return true
}

const updateTodo: Resolver = async (_, args) => {
  await Todo.findByIdAndUpdate(args.id, { task: args.task })
  return true
}

const removeTodo: Resolver = async (_, args) => {
  await Todo.findByIdAndDelete(args.id)
  return true
}

const resolvers = {
  Query: {
    todos,
    todo
  },
  Mutation: {
    createTodo,
    updateTodo,
    removeTodo
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

startStandaloneServer(server, {
  listen: { port: ENV.PORT }
}).then(({ url }) => console.log(url))

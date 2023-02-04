import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { readFileSync } from 'fs'
import { sequelize } from './db'
import { ENV } from './env'
import { Todo } from './todos'

sequelize.sync()

const typeDefs = readFileSync(`${__dirname}/../src/schema.gql`, {
  encoding: 'utf-8'
}).toString()

type Resolver = (_: any, args: any) => Promise<any>

const todos: Resolver = async (_, args) => {
  return await Todo.findAll()
}

const todo: Resolver = async (_, args) => {
  return await Todo.findByPk(args.id)
}

const createTodo: Resolver = async (_, args) => {
  await Todo.create({ task: args.task })
  return true
}

const updateTodo: Resolver = async (_, args) => {
  let todo = await Todo.findByPk(args.id)
  if (todo) {
    todo.task = args.task
    await todo.save()
    return true
  }
  return false
}

const removeTodo: Resolver = async (_, args) => {
  let todo = await Todo.findByPk(args.id)
  if (todo) {
    await todo.destroy()
    return true
  }
  return false
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

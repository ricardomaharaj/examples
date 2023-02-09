import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { env } from './config/env'
import { sequelize } from './db'
import { Tasks } from './resolvers/tasks'
import { Users } from './resolvers/users'

sequelize.sync()

const typeDefs = `
  scalar any

  type Query {
    getAllUsers: any
    authenticateUser(username: String, password: String): any
    whoAmI(jwt: String): any
    verifyUser(jwt: String): any
    decodeUser(jwt: String): any

    getTasks(jwt: String): any
  }
  
  type Mutation {
    createUser(username: String, password: String): any

    createTask(task: String, jwt: String): any
  }
`

const resolvers = {
  Query: {
    ...Users.Query,
    ...Tasks.Query,
  },
  Mutation: {
    ...Users.Mutation,
    ...Tasks.Mutation,
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

startStandaloneServer(server, {
  listen: { port: env.PORT },
}).then(({ url }) => console.log(url))

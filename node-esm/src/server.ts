import { sequelize } from "./db.js";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { env } from "./env.js";
import { Tasks } from "./resolvers/tasks.js";

await sequelize.sync();

const typeDefs = `
    type Task {
      id: ID
      task: String
    }

    type Query {
      getAllTasks: [Task]
      getTask(id: ID): Task
    }

    type Mutation {
      newTask(task: String): Task
      editTask(id: ID, task: String): Task
      deleteTask(id: ID): Task
    }
`;

const resolvers = {
  Query: {
    ...Tasks.Query,
  },
  Mutation: {
    ...Tasks.Mutation,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, { listen: { port: env.PORT } }).then(({ url }) =>
  console.log(url)
);

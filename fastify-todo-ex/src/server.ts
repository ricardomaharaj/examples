import Fast from 'fastify'
import { sequelize } from './db/index'
import { ENV } from './env'
import { TodoController } from './controllers/todo'

sequelize.sync({ logging: false })

const fast = Fast()

fast.register(TodoController, { prefix: '/todos' })

fast.listen({ port: ENV.PORT })

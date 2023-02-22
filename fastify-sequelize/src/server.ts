import Fast from 'fastify'
import FastCors from '@fastify/cors'

import { sequelize } from './db/db.js'
import { env } from './env.js'

import { taskController } from './controllers/tasks.js'

await sequelize.sync()

const fast = Fast()

fast.register(FastCors)
fast.register(taskController, { prefix: '/tasks' })

fast.listen({ port: env.PORT })

console.log(`http://localhost:${env.PORT}`)

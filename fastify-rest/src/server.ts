import cors from '@fastify/cors'
import Fast from 'fastify'
import { env } from './env.js'
import { tasksController } from './tasks-controller.js'

const fast = Fast()
fast.register(cors)
fast.register(tasksController, { prefix: '/tasks' })

fast.listen({ port: env.PORT })
console.log(`http://localhost:${env.PORT}`)

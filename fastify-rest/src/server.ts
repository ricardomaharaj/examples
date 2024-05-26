import cors from '@fastify/cors'
import Fast from 'fastify'
import { tasksController } from '~/controllers/task'
import { env } from '~/env'

const fast = Fast()
fast.register(cors)
fast.register(tasksController, { prefix: '/tasks' })

fast.listen({ port: env.PORT })
console.log(`http://localhost:${env.PORT}`)

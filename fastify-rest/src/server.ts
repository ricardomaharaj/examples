import Fast from 'fastify'
import cors from '@fastify/cors'
import { tasksController } from './tasks-controller.js'

const fast = Fast()
fast.register(cors)
fast.register(tasksController, { prefix: '/tasks' })

fast.listen({ port: 4000 })
console.log('http://localhost:4000')

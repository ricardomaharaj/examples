import cors from '@fastify/cors'
import formbody from '@fastify/formbody'
import multipart from '@fastify/multipart'
import Fast from 'fastify'
import { env } from './env'

const fast = Fast()

fast.register(cors)
fast.register(multipart, { attachFieldsToBody: true })
fast.register(formbody)

fast.post('/', async (req, res) => {
  return req.body
})

fast.listen({ port: env.PORT })
console.log(`http://localhost:${env.PORT}`)

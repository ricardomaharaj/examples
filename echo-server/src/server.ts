import Fast from 'fastify'
import cors from '@fastify/cors'
import multipart from '@fastify/multipart'
import formbody from '@fastify/formbody'

const fast = Fast()

fast.register(cors)
fast.register(multipart, { addToBody: true })
fast.register(formbody)

fast.post('/', async (req, res) => {
  return req.body
})

fast.listen({ port: 4000 })
console.log('http://localhost:4000/')

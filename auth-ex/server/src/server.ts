import Fast from 'fastify'
import { db } from './db'

db.sync()

export const fast = Fast()

fast.get('/', () => {
  return { now: Date.now() }
})

fast.listen({ port: 4000 })

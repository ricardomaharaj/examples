import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export type Controller = (
  fast: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error | undefined) => void
) => any

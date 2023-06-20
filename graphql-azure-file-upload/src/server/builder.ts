import Builder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import { prisma } from '~/server/prisma'
import { TBuilder } from '~/types/builder'

export const builder = new Builder<TBuilder>({
  plugins: [PrismaPlugin],
  prisma: { client: prisma },
})

builder.queryType({ fields: (t) => ({}) })
builder.mutationType({ fields: (t) => ({}) })

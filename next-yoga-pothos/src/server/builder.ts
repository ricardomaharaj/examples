import Builder from '@pothos/core'
import { prisma } from '~/server/prisma'
import PrismaPlugin from '@pothos/plugin-prisma'
import type PrismaTypes from '@pothos/plugin-prisma/generated'

type BuilderType = { PrismaTypes: PrismaTypes }

export const builder = new Builder<BuilderType>({
  plugins: [PrismaPlugin],
  prisma: { client: prisma },
})

builder.queryType({ fields: (t) => ({}) })
builder.mutationType({ fields: (t) => ({}) })

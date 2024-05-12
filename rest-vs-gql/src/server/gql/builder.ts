import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import type PrismaTypes from '@pothos/plugin-prisma/generated'
import { prisma } from '~/server/prisma'

type TBuilder = {
  PrismaTypes: PrismaTypes
}

export const builder = new SchemaBuilder<TBuilder>({
  plugins: [PrismaPlugin],
  prisma: { client: prisma },
})

builder.queryType({})
builder.mutationType({})

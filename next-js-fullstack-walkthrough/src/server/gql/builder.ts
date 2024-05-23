import Builder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import { DateTimeResolver } from 'graphql-scalars'
import { prisma } from '~/server/prisma'
import { TBuilder } from '~/types/builder'

// https://pothos-graphql.dev/docs/plugins/prisma#set-up-the-builder
export const builder = new Builder<TBuilder>({
  plugins: [PrismaPlugin],
  prisma: { client: prisma },
})

builder.queryType({})
builder.mutationType({})

// https://pothos-graphql.dev/docs/guide/scalars#adding-scalars-from-graphql-scalars
builder.addScalarType('DateTime', DateTimeResolver)

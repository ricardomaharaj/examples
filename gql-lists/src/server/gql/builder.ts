import Builder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import type PrismaTypes from '@pothos/plugin-prisma/generated'
import { DateTimeResolver } from 'graphql-scalars'
import { prisma } from '~/server/prisma'
import { DateTime } from '~/types/date-time'

type TBuilder = {
  PrismaTypes: PrismaTypes
  Scalars: {
    DateTime: {
      Input: DateTime
      Output: DateTime
    }
  }
}

export const builder = new Builder<TBuilder>({
  plugins: [PrismaPlugin],
  prisma: { client: prisma },
})

builder.queryType({})
builder.mutationType({})

builder.addScalarType('DateTime', DateTimeResolver)

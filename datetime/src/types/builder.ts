import type PrismaTypes from '@pothos/plugin-prisma/generated'

export type TBuilder = {
  PrismaTypes: PrismaTypes
  Scalars: {
    DateTime: {
      Input: Date
      Output: Date
    }
  }
}

import type PrismaTypes from '@pothos/plugin-prisma/generated'
import { DateTime } from '~/types/date-time'
import { YogaContext } from '~/types/yoga'

export type TBuilder = {
  // https://pothos-graphql.dev/docs/plugins/prisma#set-up-the-builder
  PrismaTypes: PrismaTypes

  // https://pothos-graphql.dev/docs/guide/context#context-object
  Context: YogaContext

  // https://pothos-graphql.dev/docs/guide/scalars#adding-custom-graphql-scalars
  Scalars: {
    DateTime: {
      Input: DateTime
      Output: DateTime
    }
  }
}

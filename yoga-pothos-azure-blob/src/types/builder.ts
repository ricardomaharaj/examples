import type PrismaTypes from '@pothos/plugin-prisma/generated'
import { Yoga } from '~/types/yoga'

export type TBuilder = {
  PrismaTypes: PrismaTypes
  Context: Yoga
  Scalars: {
    FileScalar: {
      Input: File
      Output: File
    }
  }
}

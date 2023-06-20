import { builder } from '~/server/builder'
import { prisma } from '~/server/prisma'
import { GQLError } from '~/util/gql-error'

builder.queryFields((t) => ({
  files: t.prismaField({
    type: ['File'],
    args: {
      skip: t.arg.int(),
      take: t.arg.int(),
    },
    resolve: async (query, _, args) => {
      const { skip, take } = args

      const files = await prisma.file.findMany({
        skip: skip ?? 0,
        take: take ?? 10,
        ...query,
      })

      return files
    },
  }),
  file: t.prismaField({
    type: 'File',
    args: {
      id: t.arg.int({ required: true }),
    },
    resolve: async (query, _, args) => {
      const { id } = args

      const file = await prisma.file.findUnique({
        where: { id },
        ...query,
      })
      if (!file) throw GQLError(404)

      return file
    },
  }),
}))

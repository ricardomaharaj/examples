import { builder } from '~/server/builder'
import { prisma } from '~/server/prisma'

builder.queryFields((t) => ({
  comments: t.prismaField({
    type: ['Comment'],
    resolve: async (query) => {
      return await prisma.comment.findMany({ ...query })
    },
  }),
  comment: t.prismaField({
    type: 'Comment',
    args: { id: t.arg.string({ required: true }) },
    resolve: async (query, _, { id }) => {
      return await prisma.comment.findUniqueOrThrow({ where: { id }, ...query })
    },
  }),
}))

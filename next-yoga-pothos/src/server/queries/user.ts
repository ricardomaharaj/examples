import { builder } from '~/server/builder'
import { prisma } from '~/server/prisma'

builder.queryFields((t) => ({
  users: t.prismaField({
    type: ['User'],
    resolve: async (query) => {
      return await prisma.user.findMany({ ...query })
    },
  }),
  user: t.prismaField({
    type: 'User',
    args: { id: t.arg.string({ required: true }) },
    resolve: async (query, _, { id }) => {
      return await prisma.user.findUniqueOrThrow({ where: { id }, ...query })
    },
  }),
}))

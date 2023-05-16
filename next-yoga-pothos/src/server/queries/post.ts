import { builder } from '~/server/builder'
import { prisma } from '~/server/prisma'

builder.queryFields((t) => ({
  posts: t.prismaField({
    type: ['Post'],
    resolve: async (query) => {
      return await prisma.post.findMany({ ...query })
    },
  }),
  post: t.prismaField({
    type: 'Post',
    args: { id: t.arg.string({ required: true }) },
    resolve: async (query, _, { id }) => {
      return await prisma.post.findUniqueOrThrow({ where: { id }, ...query })
    },
  }),
}))

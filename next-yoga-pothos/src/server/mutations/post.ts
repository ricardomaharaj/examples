import { builder } from '~/server/builder'
import { prisma } from '~/server/prisma'

builder.mutationFields((t) => ({
  createPost: t.boolean({
    args: {
      authorId: t.arg.string({ required: true }),
      body: t.arg.string(),
    },
    resolve: async (_, { authorId, body }) => {
      await prisma.post.create({
        data: {
          body: body ?? '',
          authorId,
        },
      })
      return true
    },
  }),
  updatePost: t.boolean({
    args: {
      id: t.arg.string({ required: true }),
      body: t.arg.string(),
    },
    resolve: async (_, { id, body }) => {
      await prisma.post.update({
        where: { id },
        data: { body: body ?? undefined },
      })
      return true
    },
  }),
  deletePost: t.boolean({
    args: { id: t.arg.string({ required: true }) },
    resolve: async (_, { id }) => {
      await prisma.post.delete({ where: { id } })
      return true
    },
  }),
}))

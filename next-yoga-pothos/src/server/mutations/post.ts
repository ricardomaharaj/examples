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
      postId: t.arg.string({ required: true }),
      body: t.arg.string(),
    },
    resolve: async (_, { postId, body }) => {
      await prisma.post.update({
        where: { id: postId },
        data: { body: body ?? undefined },
      })
      return true
    },
  }),
  deletePost: t.boolean({
    args: { postId: t.arg.string({ required: true }) },
    resolve: async (_, { postId }) => {
      await prisma.post.delete({ where: { id: postId } })
      return true
    },
  }),
  changePostAuthor: t.boolean({
    args: {
      postId: t.arg.string({ required: true }),
      authorId: t.arg.string({ required: true }),
    },
    resolve: async (_, { postId, authorId }) => {
      await prisma.post.update({
        where: { id: postId },
        data: { authorId },
      })
      return true
    },
  }),
}))

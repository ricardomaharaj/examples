import { builder } from '~/server/builder'
import { prisma } from '~/server/prisma'

builder.mutationFields((t) => ({
  createComment: t.boolean({
    args: {
      postId: t.arg.string({ required: true }),
      authorId: t.arg.string({ required: true }),
      body: t.arg.string(),
    },
    resolve: async (_, { postId, authorId, body }) => {
      await prisma.comment.create({
        data: {
          body: body ?? '',
          authorId,
          postId,
        },
      })
      return true
    },
  }),
  updateComment: t.boolean({
    args: {
      commentId: t.arg.string({ required: true }),
      body: t.arg.string(),
    },
    resolve: async (_, { commentId, body }) => {
      await prisma.comment.update({
        where: { id: commentId },
        data: { body: body ?? undefined },
      })
      return true
    },
  }),
  deleteComment: t.boolean({
    args: { commentId: t.arg.string({ required: true }) },
    resolve: async (_, { commentId }) => {
      await prisma.comment.delete({ where: { id: commentId } })
      return true
    },
  }),
      return true
    },
  }),
}))

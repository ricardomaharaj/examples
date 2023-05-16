import { builder } from '~/server/builder'
import { prisma } from '~/server/prisma'

builder.mutationFields((t) => ({
  connectUserToPost: t.boolean({
    args: {
      userId: t.arg.string({ required: true }),
      postId: t.arg.string({ required: true }),
    },
    resolve: async (_, { userId, postId }) => {
      await prisma.user.update({
        where: { id: userId },
        data: { posts: { connect: { id: postId } } },
      })
      return true
    },
  }),
  disconnectUserFromPost: t.boolean({
    args: {
      userId: t.arg.string({ required: true }),
      postId: t.arg.string({ required: true }),
    },
    resolve: async (_, { userId, postId }) => {
      await prisma.user.update({
        where: { id: userId },
        data: { posts: { disconnect: { id: postId } } },
      })
      return true
    },
  }),
  connectUserToComment: t.boolean({
    args: {
      userId: t.arg.string({ required: true }),
      commentId: t.arg.string({ required: true }),
    },
    resolve: async (_, { userId, commentId }) => {
      await prisma.user.update({
        where: { id: userId },
        data: { comments: { connect: { id: commentId } } },
      })
      return true
    },
  }),
  disconnectUserFromComment: t.boolean({
    args: {
      userId: t.arg.string({ required: true }),
      commentId: t.arg.string({ required: true }),
    },
    resolve: async (_, { userId, commentId }) => {
      await prisma.user.update({
        where: { id: userId },
        data: { comments: { disconnect: { id: commentId } } },
      })
      return true
    },
  }),
  addCommentToPost: t.boolean({
    args: {
      postId: t.arg.string({ required: true }),
      commentId: t.arg.string({ required: true }),
    },
    resolve: async (_, { postId, commentId }) => {
      await prisma.post.update({
        where: { id: postId },
        data: { comments: { connect: { id: commentId } } },
      })
      return true
    },
  }),
  removeCommentFromPost: t.boolean({
    args: {
      postId: t.arg.string({ required: true }),
      commentId: t.arg.string({ required: true }),
    },
    resolve: async (_, { postId, commentId }) => {
      await prisma.post.update({
        where: { id: postId },
        data: { comments: { disconnect: { id: commentId } } },
      })
      return true
    },
  }),
}))

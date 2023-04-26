import { Comments } from '../prisma.js'
import {
  CommentQueryResolvers,
  CommentResolvers,
} from '../types/resolvers/comment.js'

export const commentResolvers: CommentResolvers = {
  author: async ({ id }) => {
    const { author } = await Comments.findUniqueOrThrow({
      where: { id },
      select: { author: true },
    })
    return author
  },
  post: async ({ id }) => {
    const { post } = await Comments.findUniqueOrThrow({
      where: { id },
      select: { post: true },
    })
    return post
  },
}

export const commentQueryResolvers: CommentQueryResolvers = {
  comment: async (_, { id }) => {
    return await Comments.findUniqueOrThrow({ where: { id } })
  },
  comments: async () => {
    return await Comments.findMany()
  },
}

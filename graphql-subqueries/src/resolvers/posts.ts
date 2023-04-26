import { Posts } from '../prisma.js'
import { PostQueryResolvers, PostResolvers } from '../types/resolvers/post.js'

export const postResolvers: PostResolvers = {
  author: async ({ id }) => {
    const { author } = await Posts.findUniqueOrThrow({
      where: { id },
      select: { author: true },
    })
    return author
  },
  comments: async ({ id }, { skip, take }) => {
    const { comments } = await Posts.findUniqueOrThrow({
      where: { id },
      select: { comments: { skip, take } },
    })
    return comments
  },
}

export const postQueryResolvers: PostQueryResolvers = {
  post: async (_, { id }) => {
    return await Posts.findUniqueOrThrow({ where: { id } })
  },
  posts: async () => {
    return await Posts.findMany()
  },
}

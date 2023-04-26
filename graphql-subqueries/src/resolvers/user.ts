import { Users } from '../prisma.js'
import { UserQueryResolvers, UserResolvers } from '../types/resolvers/user.js'

export const userResolvers: UserResolvers = {
  posts: async ({ id }, { skip, take }) => {
    const { posts } = await Users.findUniqueOrThrow({
      where: { id },
      select: { posts: { skip, take } },
    })
    return posts
  },
  comments: async ({ id }, { skip, take }) => {
    const { comments } = await Users.findUniqueOrThrow({
      where: { id },
      select: { comments: { skip, take } },
    })
    return comments
  },
}

export const userQueryResolvers: UserQueryResolvers = {
  user: async (_, { id }) => {
    return await Users.findUniqueOrThrow({ where: { id } })
  },
  users: async () => {
    return await Users.findMany()
  },
}

import { Comment, Post, User } from '@prisma/client'

import { FindByIdArgs } from './args/find-by-id.js'
import { PaginateArgs } from './args/paginate.js'

export type UserResolvers = {
  posts: (parent: User, args: PaginateArgs) => Promise<Post[]>
  comments: (parent: User, args: PaginateArgs) => Promise<Comment[]>
}

export type UserQueryResolvers = {
  user: (parent: unknown, args: FindByIdArgs) => Promise<User>
  users: () => Promise<User[]>
}

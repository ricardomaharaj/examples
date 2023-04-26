import { Comment, Post, User } from '@prisma/client'

import { FindByIdArgs } from './args/find-by-id.js'
import { PaginateArgs } from './args/paginate.js'

export type PostResolvers = {
  author: (parent: Post) => Promise<User>
  comments: (parent: Post, args: PaginateArgs) => Promise<Comment[]>
}

export type PostQueryResolvers = {
  post: (parent: unknown, args: FindByIdArgs) => Promise<Post>
  posts: () => Promise<Post[]>
}

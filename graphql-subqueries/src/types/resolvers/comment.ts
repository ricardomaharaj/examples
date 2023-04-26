import { Comment, Post, User } from '@prisma/client'

import { FindByIdArgs } from './args/find-by-id.js'

export type CommentResolvers = {
  author: (parent: Comment) => Promise<User>
  post: (parent: Comment) => Promise<Post>
}

export type CommentQueryResolvers = {
  comment: (parent: unknown, args: FindByIdArgs) => Promise<Comment>
  comments: () => Promise<Comment[]>
}

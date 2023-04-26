import { CommentQueryResolvers, CommentResolvers } from './resolvers/comment.js'
import { PostQueryResolvers, PostResolvers } from './resolvers/post.js'
import { UserQueryResolvers, UserResolvers } from './resolvers/user.js'

type Query = UserQueryResolvers & PostQueryResolvers & CommentQueryResolvers

export type Resolvers = {
  User: UserResolvers
  Post: PostResolvers
  Comment: CommentResolvers
  Query: Query
}

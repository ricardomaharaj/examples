import { createSchema, createYoga } from 'graphql-yoga'
import { readFileSync } from 'node:fs'
import { createServer } from 'node:http'

import { userQueryResolvers, userResolvers } from './resolvers/user.js'
import { postQueryResolvers, postResolvers } from './resolvers/posts.js'
import { commentQueryResolvers, commentResolvers } from './resolvers/comment.js'
import { Resolvers } from './types/resolvers.js'

const typeDefs = readFileSync('./schema.gql').toString('utf8')

const resolvers: Resolvers = {
  User: userResolvers,
  Post: postResolvers,
  Comment: commentResolvers,
  Query: {
    ...userQueryResolvers,
    ...postQueryResolvers,
    ...commentQueryResolvers,
  },
}

const schema = createSchema({ typeDefs, resolvers })

const yoga = createYoga({ schema, graphqlEndpoint: '/' })

const server = createServer(yoga)
server.listen(4000, () => console.log('http://localhost:4000/'))

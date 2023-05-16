import { builder } from '~/server/builder'

builder.prismaObject('Comment', {
  fields: (t) => ({
    id: t.exposeString('id'),
    body: t.exposeString('body'),
    author: t.relation('author'),
    authorId: t.exposeString('authorId'),
    post: t.relation('post'),
    postId: t.exposeString('postId'),
  }),
})

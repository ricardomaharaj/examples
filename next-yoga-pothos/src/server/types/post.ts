import { builder } from '~/server/builder'

builder.prismaObject('Post', {
  fields: (t) => ({
    id: t.exposeString('id'),
    body: t.exposeString('body'),
    author: t.relation('author'),
    authorId: t.exposeString('authorId'),
    comments: t.relation('comments'),
  }),
})

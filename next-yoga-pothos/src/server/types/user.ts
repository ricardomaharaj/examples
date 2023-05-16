import { builder } from '~/server/builder'

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeString('id'),
    email: t.exposeString('email'),
    posts: t.relation('posts'),
    comments: t.relation('comments'),
  }),
})

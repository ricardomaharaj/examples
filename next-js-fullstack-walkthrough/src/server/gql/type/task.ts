import { builder } from '~/server/gql/builder'
import { genUserListQuery, userListArgs } from '~/server/gql/list/user'

builder.prismaObject('Task', {
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    desc: t.exposeString('desc', { nullable: true }),

    users: t.relation('users', {
      args: userListArgs,
      query: (args) => genUserListQuery(args),
    }),

    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('createdAt', { type: 'DateTime' }),
  }),
})

import { builder } from '~/server/gql/builder'
import { genUserListQuery, userListArgs } from '~/server/gql/list/user'

builder.prismaObject('Task', {
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title', { nullable: true }),
    desc: t.exposeString('desc', { nullable: true }),
    labels: t.exposeStringList('labels'),

    //
    users: t.relation('users', {
      args: userListArgs,
      query: (args) => genUserListQuery(args),
    }),

    //
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
  }),
})

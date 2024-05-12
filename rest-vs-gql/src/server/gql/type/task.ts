import { builder } from '~/server/gql/builder'

builder.prismaObject('Task', {
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title', { nullable: true }),
    desc: t.exposeString('desc', { nullable: true }),

    users: t.relation('users'),
  }),
})

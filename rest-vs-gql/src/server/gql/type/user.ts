import { builder } from '~/server/gql/builder'

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name', { nullable: true }),
    email: t.exposeString('email', { nullable: true }),

    tasks: t.relation('tasks'),
  }),
})

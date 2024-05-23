import { builder } from '~/server/gql/builder'
import { genTaskListQuery, taskListArgs } from '~/server/gql/list/task'

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name', { nullable: true }),
    email: t.exposeString('email'),
    image: t.exposeString('image', { nullable: true }),

    location: t.relation('location', { nullable: true }),
    tasks: t.relation('tasks', {
      args: taskListArgs,
      query: (args) => genTaskListQuery(args),
    }),

    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('createdAt', { type: 'DateTime' }),
  }),
})

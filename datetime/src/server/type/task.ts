import { builder } from '~/server/builder'

builder.prismaObject('Task', {
  fields: (t) => ({
    id: t.exposeInt('id'),
    body: t.expose('body', { type: 'String', nullable: true }),
    dueDate: t.expose('dueDate', { type: 'DateTime', nullable: true }),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
  }),
})

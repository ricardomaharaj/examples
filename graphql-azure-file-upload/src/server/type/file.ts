import { builder } from '~/server/builder'

builder.prismaObject('File', {
  fields: (t) => ({
    id: t.exposeInt('id'),
    name: t.exposeString('name'),
    type: t.exposeString('type'),
    url: t.exposeString('url'),
  }),
})

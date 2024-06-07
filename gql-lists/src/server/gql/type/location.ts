import { builder } from '~/server/gql/builder'

builder.prismaObject('Location', {
  fields: (t) => ({
    id: t.exposeID('id'),

    city: t.exposeString('city', { nullable: true }),
    province: t.exposeString('province', { nullable: true }),
    country: t.exposeString('country', { nullable: true }),

    //
    user: t.relation('user'),
    userId: t.exposeString('userId'),
  }),
})

import { builder } from '~/server/gql/builder'
import { prisma } from '~/server/prisma'

builder.queryFields((t) => ({
  users: t.prismaField({
    type: ['User'],
    resolve: async (query, parent, args, ctx) => {
      const users = await prisma.user.findMany({
        ...query,
      })

      return users
    },
  }),
}))

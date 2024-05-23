import { builder } from '~/server/gql/builder'
import { genUserListQuery, userListArgs } from '~/server/gql/list/user'
import { prisma } from '~/server/prisma'
import { GQLError } from '~/server/util/gql-error'

builder.queryFields((t) => ({
  my: t.prismaField({
    type: 'User',
    resolve: async (query, parent, args, ctx) => {
      const user = await prisma.user.findUnique({
        where: { id: ctx.user.id },
        ...query,
      })

      if (!user) throw GQLError('Not Found')

      return user
    },
  }),
  user: t.prismaField({
    type: 'User',
    args: {
      userId: t.arg.string({ required: true }),
    },
    resolve: async (query, parent, args, ctx) => {
      const user = await prisma.user.findUnique({
        where: { id: args.userId },
        ...query,
      })

      if (!user) throw GQLError('Not Found')

      return user
    },
  }),
  users: t.prismaField({
    type: ['User'],
    args: userListArgs,
    resolve: async (query, parent, args, ctx) => {
      const userListQuery = genUserListQuery(args)

      const user = await prisma.user.findMany({
        ...userListQuery,
        ...query,
      })

      return user
    },
  }),
}))

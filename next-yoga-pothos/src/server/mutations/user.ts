import { builder } from '~/server/builder'
import { prisma } from '~/server/prisma'

builder.mutationFields((t) => ({
  createUser: t.boolean({
    args: { email: t.arg.string({ required: true }) },
    resolve: async (_, { email }) => {
      await prisma.user.create({ data: { email } })
      return true
    },
  }),
  updateUser: t.boolean({
    args: {
      userId: t.arg.string({ required: true }),
      email: t.arg.string(),
    },
    resolve: async (_, { userId, email }) => {
      await prisma.user.update({
        where: { id: userId },
        data: { email: email ?? undefined },
      })
      return true
    },
  }),
  deleteUser: t.boolean({
    args: { userId: t.arg.string({ required: true }) },
    resolve: async (_, { userId }) => {
      await prisma.user.delete({ where: { id: userId } })
      return true
    },
  }),
}))

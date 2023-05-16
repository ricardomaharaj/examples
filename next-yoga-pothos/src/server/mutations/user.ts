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
      id: t.arg.string({ required: true }),
      email: t.arg.string(),
    },
    resolve: async (_, { id, email }) => {
      await prisma.user.update({
        where: { id },
        data: { email: email ?? undefined },
      })
      return true
    },
  }),
  deleteUser: t.boolean({
    args: { id: t.arg.string({ required: true }) },
    resolve: async (_, { id }) => {
      await prisma.user.delete({ where: { id } })
      return true
    },
  }),
}))

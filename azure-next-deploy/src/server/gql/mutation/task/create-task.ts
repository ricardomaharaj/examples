import { builder } from '~/server/gql/builder'
import { prisma } from '~/server/prisma'

builder.mutationFields((t) => ({
  createTask: t.prismaField({
    type: 'Task',
    resolve: async (query, parent, args, ctx) => {
      const task = await prisma.task.create({
        data: {},
        ...query,
      })

      return task
    },
  }),
}))

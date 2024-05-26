import { builder } from '~/server/gql/builder'
import { prisma } from '~/server/prisma'

builder.queryFields((t) => ({
  tasks: t.prismaField({
    type: ['Task'],
    resolve: async (query, parent, args, ctx) => {
      const tasks = await prisma.task.findMany({
        ...query,
      })

      return tasks
    },
  }),

  task: t.prismaField({
    type: 'Task',
    args: {
      taskId: t.arg.string({ required: true }),
    },
    resolve: async (query, parent, args, ctx) => {
      const task = await prisma.task.findUnique({
        where: { id: args.taskId },
        ...query,
      })

      if (!task) throw Error()

      return task
    },
  }),
}))

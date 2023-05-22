import { builder } from '~/server/builder'
import { Tasks } from '~/server/prisma'

builder.queryFields((t) => ({
  tasks: t.prismaField({
    type: ['Task'],
    args: {
      skip: t.arg.int({ required: true, defaultValue: 0 }),
      take: t.arg.int({ required: true, defaultValue: 10 }),
    },
    resolve: async (query, _, { skip, take }) => {
      return await Tasks.findMany({ skip, take, ...query })
    },
  }),
  task: t.prismaField({
    type: 'Task',
    args: {
      taskId: t.arg.int({ required: true }),
    },
    resolve: async (query, _, { taskId }) => {
      return await Tasks.findUniqueOrThrow({ where: { id: taskId }, ...query })
    },
  }),
}))

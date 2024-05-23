import { builder } from '~/server/gql/builder'
import { genTaskListQuery, taskListArgs } from '~/server/gql/list/task'
import { prisma } from '~/server/prisma'
import { GQLError } from '~/server/util/gql-error'

builder.queryFields((t) => ({
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

      if (!task) throw GQLError('Not Found')

      return task
    },
  }),
  tasks: t.prismaField({
    type: ['Task'],
    args: taskListArgs,
    resolve: async (query, parent, args, ctx) => {
      const taskListQuery = genTaskListQuery(args)

      const task = await prisma.task.findMany({
        ...taskListQuery,
        ...query,
      })

      return task
    },
  }),
}))

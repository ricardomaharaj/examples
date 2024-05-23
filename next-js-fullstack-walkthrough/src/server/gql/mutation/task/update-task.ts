import { builder } from '~/server/gql/builder'
import { prisma } from '~/server/prisma'
import { queryHelpers as qh } from '~/server/util/query-helpers'

builder.mutationFields((t) => ({
  updateTask: t.prismaField({
    type: 'Task',
    args: {
      taskId: t.arg.string({ required: true }),
      title: t.arg.string(),
      desc: t.arg.string(),
      users: t.arg.stringList(),
    },
    resolve: async (query, parent, args, ctx) => {
      const task = await prisma.task.update({
        where: { id: args.taskId },
        data: {
          title: qh.nonNull(args.title),
          desc: qh.nonNull(args.desc),
          users: args.users
            ? { set: args.users.map((userId) => ({ id: userId })) }
            : undefined,
        },
        ...query,
      })

      return task
    },
  }),
}))

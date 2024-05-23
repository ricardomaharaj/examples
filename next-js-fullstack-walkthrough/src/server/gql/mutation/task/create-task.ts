import { builder } from '~/server/gql/builder'
import { prisma } from '~/server/prisma'
import { queryHelpers as qh } from '~/server/util/query-helpers'

builder.mutationFields((t) => ({
  createTask: t.prismaField({
    type: 'Task',
    args: {
      title: t.arg.string({ required: true }),
      desc: t.arg.string(),
      users: t.arg.stringList({ description: 'a list of user ids' }),
    },
    resolve: async (query, parent, args, ctx) => {
      const task = await prisma.task.create({
        data: {
          title: args.title,
          desc: qh.nonNull(args.desc),
          users: args.users
            ? { connect: args.users.map((userId) => ({ id: userId })) }
            : undefined,
        },
        ...query,
      })

      return task
    },
  }),
}))

import { builder } from '~/server/builder'
import { Tasks } from '~/server/prisma'

builder.mutationFields((t) => ({
  createTask: t.boolean({
    args: {
      body: t.arg.string({}),
      dueDate: t.arg({ type: 'DateTime' }),
    },
    resolve: async (_, { body, dueDate }) => {
      return Tasks.create({ data: { body, dueDate } })
        .then(() => true)
        .catch(() => false)
    },
  }),
  updateTask: t.boolean({
    args: {
      taskId: t.arg.int({ required: true }),
      body: t.arg.string(),
      dueDate: t.arg({ type: 'DateTime' }),
    },
    resolve: async (_, { taskId, body, dueDate }) => {
      return Tasks.update({
        where: { id: taskId },
        data: { body, dueDate },
      })
        .then(() => true)
        .catch(() => false)
    },
  }),
  deleteTask: t.boolean({
    args: { taskId: t.arg.int({ required: true }) },
    resolve: async (_, { taskId }) => {
      return Tasks.delete({ where: { id: taskId } })
        .then(() => true)
        .catch(() => false)
    },
  }),
}))

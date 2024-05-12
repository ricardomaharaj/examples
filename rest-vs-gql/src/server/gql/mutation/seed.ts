import { builder } from '~/server/gql/builder'
import { prisma } from '~/server/prisma'
import tasks from './json/tasks.json'
import users from './json/users.json'

builder.mutationFields((t) => ({
  seed: t.boolean({
    resolve: async () => {
      for (let i = 0; i < 10; i++) {
        await prisma.user.create({
          data: {
            name: users[i].name,
            email: users[i].email,

            tasks: {
              create: {
                title: tasks[i].title,
                desc: tasks[i].desc,
              },
            },
          },
        })
      }

      return true
    },
  }),
}))

import { faker } from '@faker-js/faker'
import { randomBytes } from 'crypto'
import { builder } from '~/server/gql/builder'
import { prisma } from '~/server/prisma'

builder.mutationFields((t) => ({
  seed: t.boolean({
    resolve: async () => {
      const users: string[] = []

      for (let i = 0; i < 100; i++) {
        const user = await createRandomUser()
        users.push(user.id)
      }

      for (let i = 0; i < 50; i++) {
        createRandomTask(users)
      }

      return true
    },
  }),
}))

async function createRandomUser() {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const email = faker.internet.email({ firstName, lastName })
  const image = `https://robohash.org/${randomBytes(24).toString('hex')}`
  const tags = faker.lorem.words({ min: 3, max: 6 }).split(' ')

  const city = faker.location.city()
  const province = faker.location.state()
  const country = faker.location.country()

  const user = await prisma.user.create({
    data: {
      name: `${firstName} ${lastName}`,
      email: email,
      image: image,
      tags: tags,
      location: {
        create: {
          city: city,
          province: province,
          country: country,
        },
      },
    },
  })

  return user
}

async function createRandomTask(users: string[]) {
  const title = faker.lorem.sentence()
  const desc = faker.lorem.paragraphs({ min: 2, max: 4 })
  const labels = faker.lorem.words({ min: 3, max: 6 }).split(' ')

  const task = await prisma.task.create({
    data: {
      title: title,
      desc: desc,
      labels: labels,

      users: { connect: { id: faker.helpers.arrayElement(users) } },
    },
  })

  return task
}

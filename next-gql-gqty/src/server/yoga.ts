import { createYoga } from 'graphql-yoga'
import { schema } from '~/server/schema'

async function sleep() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(resolve, 1000)
  })
}

export const yoga = createYoga({
  schema: schema,
  graphqlEndpoint: '/api/gql',
  context: async () => {
    // for loading ui
    await sleep()
  },
})

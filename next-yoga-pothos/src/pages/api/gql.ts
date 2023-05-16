import { createYoga } from 'graphql-yoga'
import { schema } from '~/server/schema'
import { type PageConfig } from 'next'

export const config: PageConfig = { api: { bodyParser: false } }

const yoga = createYoga({ schema, graphqlEndpoint: '/api/gql' })

export default yoga

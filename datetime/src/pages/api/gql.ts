import { createYoga } from 'graphql-yoga'
import { schema } from '~/server/schema'

const yoga = createYoga({ schema, graphqlEndpoint: '/api/gql' })

export default yoga

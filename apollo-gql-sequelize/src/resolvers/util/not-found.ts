import { GraphQLError } from 'graphql'

export function notFound() {
  return new GraphQLError('not found', { extensions: { code: 404 } })
}

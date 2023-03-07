import { GraphQLError } from 'graphql'

export function notFound() {
  return new GraphQLError('NOT_FOUND', { extensions: { code: 404 } })
}

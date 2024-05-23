import { GraphQLError } from 'graphql'

const httpErrors = {
  Unauthorized: 401,
  'Not Found': 404,
  'Internal Error': 500,
} as const

export function GQLError(message: keyof typeof httpErrors) {
  return new GraphQLError(message, {
    extensions: { http: { status: httpErrors[message] } },
  })
}

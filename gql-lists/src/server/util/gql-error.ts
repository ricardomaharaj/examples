import { GraphQLError } from 'graphql'

const errors = {
  'Bad Request': 400,
  Unauthorized: 401,
  'Not Found': 404,
  'Internal Error': 500,
} as const

export function GQLError(errorKey: keyof typeof errors) {
  return new GraphQLError(errorKey, {
    extensions: {
      http: {
        status: errors[errorKey],
      },
    },
  })
}

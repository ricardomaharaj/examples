import { GraphQLError } from 'graphql'

const statusCodes = {
  404: 'Not Found',
  500: 'Internal Error',
} as const

export function GQLError(code: keyof typeof statusCodes) {
  return new GraphQLError(statusCodes[code], {
    extensions: { http: { status: code } },
  })
}

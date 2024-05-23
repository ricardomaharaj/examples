import { YogaInitialContext } from 'graphql-yoga'
import { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-auth'

// https://the-guild.dev/graphql/yoga-server/docs/features/context
export type YogaServerContext = {
  req: NextApiRequest
  res: NextApiResponse
} & YogaInitialContext // https://the-guild.dev/graphql/yoga-server/docs/features/context#default-context

// https://the-guild.dev/graphql/yoga-server/docs/features/context
export type YogaContext = {
  user: Session['user']
}

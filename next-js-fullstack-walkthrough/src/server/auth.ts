import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextApiRequest, NextApiResponse } from 'next'
import { AuthOptions, getServerSession } from 'next-auth'
import NextAuth from 'next-auth/next'
import Google from 'next-auth/providers/google'
import { env } from '~/server/env'
import { prisma } from '~/server/prisma'

export const authOpts: AuthOptions = {
  // https://next-auth.js.org/v3/adapters/prisma
  adapter: PrismaAdapter(prisma),

  // https://next-auth.js.org/providers/google
  providers: [
    Google({
      clientId: env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: env.GOOGLE_OAUTH_CLIENT_SECRET,
    }),
  ],

  // https://next-auth.js.org/v3/configuration/callbacks#session-callback
  callbacks: {
    session: ({ session, user }) => {
      session.user.id = user.id

      return session
    },
  },
}

// https://next-auth.js.org/v3/getting-started/example#add-api-route
export const nextAuth = NextAuth(authOpts)

export async function getSession({
  req,
  res,
}: {
  req: NextApiRequest
  res: NextApiResponse
}) {
  const session = await getServerSession(req, res, authOpts)
  return session
}

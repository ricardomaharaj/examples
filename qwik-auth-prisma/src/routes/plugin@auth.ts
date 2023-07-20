import { serverAuth$ } from '@builder.io/qwik-auth'
import GoogleProvider from '@auth/core/providers/google'
import type { Provider } from '@auth/core/providers'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '~/prisma'

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    adapter: PrismaAdapter(prisma),
    secret: env.get('AUTH_SECRET'),
    trustHost: true,
    providers: [
      GoogleProvider({
        clientId: env.get('GOOGLE_CLIENT_ID')!,
        clientSecret: env.get('GOOGLE_CLIENT_SECRET')!,
      }),
    ] as Provider[],
  }))

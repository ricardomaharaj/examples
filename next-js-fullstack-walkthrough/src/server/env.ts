export const env = {
  DATABASE_URL: process.env.DATABASE_URL!,

  // https://next-auth.js.org/providers/google
  GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID!,
  GOOGLE_OAUTH_CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET!,

  // https://next-auth.js.org/configuration/options#environment-variables
  NEXTAUTH_URL: process.env.NEXTAUTH_URL!,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET!,
}

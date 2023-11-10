import 'dotenv/config'

/** the vars you should have in your .env file */
export const env = {
  // oauth 2.0 creds
  GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID!,
  GOOGLE_OAUTH_CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET!,

  // service account creds
  GOOGLE_SA_CLIENT_EMAIL: process.env.GOOGLE_SA_CLIENT_EMAIL!,
  GOOGLE_SA_CLIENT_ID: process.env.GOOGLE_SA_CLIENT_ID!,
  GOOGLE_SA_PRIVATE_KEY_ID: process.env.GOOGLE_SA_PRIVATE_KEY_ID!,
  GOOGLE_SA_PRIVATE_KEY: process.env.GOOGLE_SA_PRIVATE_KEY!,

  /** the token received in the oauth playground */
  REFRESH_TOKEN: process.env.REFRESH_TOKEN!,

  /** the google account that you used to authenticate in the oauth playground consent screen */
  PERSONAL_GMAIL: process.env.PERSONAL_GMAIL!,
} as const

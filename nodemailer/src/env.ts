import { z } from 'zod'

export const env = z
  .object({
    NODE_ENV: z.enum(['development', 'production']),
    PORT: z
      .string()
      .default('4000')
      .transform((x) => parseInt(x)),

    GOOGLE_OAUTH_CLIENT_ID: z.string(),
    GOOGLE_OAUTH_CLIENT_SECRET: z.string(),

    REFRESH_TOKEN: z.string(),
    PERSONAL_GMAIL: z.string(),
  })
  .parse(process.env)

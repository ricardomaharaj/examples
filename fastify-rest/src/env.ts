import { z } from 'zod'

export const env = z
  .object({
    NODE_ENV: z.enum(['development', 'production']),
    PORT: z
      .string()
      .default('3000')
      .transform((x) => parseInt(x)),
  })
  .parse(process.env)

import { z } from 'zod'

export const env = z
  .object({
    NODE_ENV: z.enum(['development', 'production']),
    AZURE_BLOB_SAS_URL: z.string(),
  })
  .parse(process.env)

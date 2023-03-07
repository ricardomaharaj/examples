import 'dotenv/config'

const { MONGO } = process.env

if (!MONGO) {
  throw new Error('')
}

export const env = {
  PORT: parseInt(process.env.PORT || '4000'),
  MONGO
}

import 'dotenv/config'

export const env = {
  PORT: parseInt(process.env.PORT || '4000'),
  SECRET: process.env.SECRET,
}

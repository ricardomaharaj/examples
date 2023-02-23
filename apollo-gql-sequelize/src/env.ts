import 'dotenv/config'

export const env = {
  PORT: parseInt(process.env.PORT || '4000'),
  NODE_ENV: process.env.NODE_ENV || 'development'
}

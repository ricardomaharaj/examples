import * as dotenv from 'dotenv'
dotenv.config()

export const ENV = {
  PORT: parseInt(process.env.PORT || '4000'),
  MONGO: process.env.MONGO
}

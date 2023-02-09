import fastJWT from 'fast-jwt'
import { env } from '../config/env'

export const jwtSign = fastJWT.createSigner({ key: env.SECRET })
export const jwtVerify = fastJWT.createVerifier({ key: env.SECRET })
export const jwtDecode = fastJWT.createDecoder()

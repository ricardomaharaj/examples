import { randomBytes } from 'crypto'

export function genID() {
  return randomBytes(32).toString('hex')
}

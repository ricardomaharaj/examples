import { gql } from 'urql'
import { User } from '~/types/gql'

type Data = {
  user: User
}

type Vars = {
  userId: string
}

export const userQuery = gql<Data, Vars>`
  query ($userId: String!) {
    user(userId: $userId) {
      id
      name
    }
  }
`

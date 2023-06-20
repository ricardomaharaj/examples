import type { File } from '@prisma/client'
import { gql, useQuery } from 'urql'

const query = gql`
  query ($skip: Int, $take: Int) {
    files(skip: $skip, take: $take) {
      id
      name
      type
      url
    }
  }
`

type Data = {
  files: File[]
}

type Vars = {
  skip?: number
  take?: number
}

export const useGetFiles = (variables: Vars) =>
  useQuery<Data, Vars>({ query, variables })

import { Task } from '@prisma/client'
import { gql, useQuery } from 'urql'

const query = gql`
  query ($skip: Int = 0, $take: Int = 10) {
    tasks(skip: $skip, take: $take) {
      body
      createdAt
      dueDate
      id
      updatedAt
    }
  }
`

type Data = {
  tasks: Task[]
}

type Vars = {
  skip?: number
  take?: number
}

export const useTasks = (vars: Vars) =>
  useQuery<Data, Vars>({ query, variables: vars })

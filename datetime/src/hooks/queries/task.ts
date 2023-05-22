import { Task } from '@prisma/client'
import { gql, useQuery } from 'urql'

const query = gql`
  query ($taskId: Int!) {
    task(taskId: $taskId) {
      body
      createdAt
      dueDate
      id
      updatedAt
    }
  }
`

type Data = {
  task: Task
}

type Vars = {
  taskId: number
}

export const useTask = (vars: Vars) =>
  useQuery<Data, Vars>({ query, variables: vars })

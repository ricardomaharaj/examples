import { gql } from 'urql'
import { Task } from '~/types/gql'

type Data = {
  task: Task
}

type Vars = {
  taskId: string
}

export const taskQuery = gql<Data, Vars>`
  query ($taskId: String!) {
    task(taskId: $taskId) {
      id
      createdAt
      updatedAt
    }
  }
`

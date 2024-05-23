import { gql } from 'urql'
import { Task } from '~/types/gql'

type Data = {
  updateTask: Task
}

type Vars = {
  taskId: string
  title?: string
  desc?: string
  users?: string[]
}

export const updateTaskMutation = gql<Data, Vars>`
  mutation (
    $taskId: String!
    $title: String
    $desc: String
    $users: [String!]
  ) {
    updateTask(taskId: $taskId, title: $title, desc: $desc, users: $users) {
      id
    }
  }
`

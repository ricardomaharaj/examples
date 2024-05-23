import { gql } from 'urql'
import { Task } from '~/types/gql'

type Data = {
  createTask: Task
}

type Vars = {
  title: string
  desc?: string
  users?: string[]
}

export const createTaskMutation = gql<Data, Vars>`
  mutation ($title: String!, $desc: String, $users: [String!]) {
    createTask(title: $title, desc: $desc, users: $users) {
      id
    }
  }
`

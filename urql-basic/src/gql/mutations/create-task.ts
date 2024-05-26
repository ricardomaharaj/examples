import { gql } from 'urql'
import { Task } from '~/types/gql'

type Data = {
  createTask: Task
}

type Vars = void

export const createTaskMutation = gql<Data, Vars>`
  mutation {
    createTask {
      id
    }
  }
`

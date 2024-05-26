import { gql } from 'urql'
import { Task } from '~/types/gql'

type Data = {
  tasks: Task[]
}

type Vars = void

export const tasksQuery = gql<Data, Vars>`
  query {
    tasks {
      id
      createdAt
      updatedAt
    }
  }
`

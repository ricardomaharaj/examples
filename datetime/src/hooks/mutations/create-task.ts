import { gql, useMutation } from 'urql'

const mutation = gql`
  mutation ($body: String, $dueDate: DateTime) {
    createTask(body: $body, dueDate: $dueDate)
  }
`

type Data = {
  createTask: boolean
}

type Vars = {
  body?: string
  dueDate?: Date | string
}

export const useCreateTask = () => useMutation<Data, Vars>(mutation)

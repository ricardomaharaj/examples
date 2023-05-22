import { gql, useMutation } from 'urql'

const mutation = gql`
  mutation ($body: String, $dueDate: DateTime, $taskId: Int!) {
    updateTask(taskId: $taskId, dueDate: $dueDate, body: $body)
  }
`

type Data = {
  updateTask: boolean
}

type Vars = {
  body?: string
  dueDate?: Date | string | null
  taskId: number
}

export const useUpdateTask = () => useMutation<Data, Vars>(mutation)

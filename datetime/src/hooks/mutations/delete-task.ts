import { gql, useMutation } from 'urql'

const mutation = gql`
  mutation ($taskId: Int!) {
    deleteTask(taskId: $taskId)
  }
`

type Data = {
  deleteTask: boolean
}

type Vars = {
  taskId: number
}

export const useDeleteTask = () => useMutation<Data, Vars>(mutation)

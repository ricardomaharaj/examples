import { gql, useMutation } from 'urql'

const mutation = gql`
  mutation ($fileId: Int!) {
    deleteFile(fileId: $fileId)
  }
`

type Data = {
  deleteFile: boolean
}

type Vars = {
  fileId: number
}

export const useDeleteFile = () => useMutation<Data, Vars>(mutation)

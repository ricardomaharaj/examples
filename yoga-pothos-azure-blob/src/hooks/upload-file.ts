import { gql, useMutation } from 'urql'

const mutation = gql`
  mutation ($file: FileScalar!) {
    uploadFile(file: $file)
  }
`

type Data = {
  uploadFile: string
}

type Vars = {
  file: File
}

export const useUploadFile = () => useMutation<Data, Vars>(mutation)

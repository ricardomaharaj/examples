import { gql } from 'urql'

type Vars = {
  file: File
}

type Data = {
  uploadFile: boolean
}

export const uploadFileMutation = gql<Data, Vars>`
  mutation ($file: File) {
    uploadFile(file: $file)
  }
`

import { gql } from 'urql'

type Data = {
  uploadFile: boolean
}

type Vars = {
  file: File
}

export const uploadFileMutation = gql<Data, Vars>`
  mutation ($file: File!) {
    uploadFile(file: $file)
  }
`

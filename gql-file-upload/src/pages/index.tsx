import { useRef } from 'react'
import { useMutation } from 'urql'
import { uploadFileMutation } from '~/gql/upload-file'

export default function Home() {
  const [res, uploadFile] = useMutation(uploadFileMutation)

  const fileRef = useRef<HTMLInputElement>(null)

  async function handleSubmit() {
    const file = fileRef.current?.files?.item(0)
    if (!file) return

    uploadFile({ file })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='file' ref={fileRef} />
        <button type='submit'>Upload</button>
      </form>
    </>
  )
}

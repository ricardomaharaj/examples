import { FormEvent, useRef } from 'react'
import { useMutation } from 'urql'
import { uploadFileMutation } from '~/gql/mutations/upload-file'

export default function Home() {
  const [, uploadFile] = useMutation(uploadFileMutation)

  const fileRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const file = fileRef.current?.files?.item(0)
    if (!file) return

    await uploadFile({ file })
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

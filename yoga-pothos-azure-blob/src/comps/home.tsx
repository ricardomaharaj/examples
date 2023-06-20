import { FormEvent, useRef } from 'react'
import { useUploadFile } from '~/hooks/upload-file'

export function Home() {
  const [res, uploadFile] = useUploadFile()
  const fileRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const file = fileRef.current?.files?.item(0)
    if (!file) return
    await uploadFile({ file })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={fileRef} type='file' required={true} />
        <button type='submit'>Submit</button>
      </form>
      {res.data?.uploadFile && (
        <div>
          <a href={res.data?.uploadFile}>Your File</a>
        </div>
      )}
    </>
  )
}

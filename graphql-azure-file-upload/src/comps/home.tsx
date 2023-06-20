import type { File } from '@prisma/client'
import { useRef } from 'react'
import { UseQueryExecute } from 'urql'
import { useDeleteFile } from '~/hooks/delete-file'
import { useGetFiles } from '~/hooks/get-files'
import { useUploadFile } from '~/hooks/upload-file'

export function Home() {
  const [filesRes, refresh] = useGetFiles({})
  const files = filesRes.data?.files

  const [uploadRes, uploadFile] = useUploadFile()
  const fileRef = useRef<HTMLInputElement>(null)

  async function handleUpload() {
    const file = fileRef.current?.files?.item(0)
    if (!file) return
    await uploadFile({ file })
    refresh({ requestPolicy: 'network-only' })
  }

  return (
    <>
      <div className='col'>
        <form className='row' onSubmit={(e) => e.preventDefault()}>
          <input ref={fileRef} type='file' required={true} />
          <button type='button' onClick={handleUpload}>
            Upload
          </button>
        </form>
        <div className='col'>
          {files?.map((file) => (
            <FileCard file={file} refresh={refresh} key={file.id} />
          ))}
        </div>
      </div>
    </>
  )
}

function FileCard(props: { file: File; refresh: UseQueryExecute }) {
  const { file, refresh } = props

  const [deleteRes, deleteFile] = useDeleteFile()

  async function handleDelete() {
    await deleteFile({ fileId: file.id })
    refresh({ requestPolicy: 'network-only' })
  }

  return (
    <>
      <div className='row' style={{ border: '1px solid black', padding: 4 }}>
        <div className='col'>
          <div>File {file.name}</div>
          <div>Id: {file.id}</div>
          <div>Type: {file.type}</div>
          <a href={file.url} target='_blank'>
            {file.url}
          </a>
        </div>
        <div className='col'>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  )
}

import { BlobServiceClient } from '@azure/storage-blob'
import { env } from '~/env'
import { GQLError } from '~/util/gql-error'

const client = new BlobServiceClient(env.AZURE_BLOB_SAS_URL)
const container = client.getContainerClient('files')

export const blobUtil = {
  uploadFile: async (args: { file: File }) => {
    const { file } = args
    const blobName = `${Date.now()}_${file.name}`
    const blob = container.getBlockBlobClient(blobName)
    const buffer = await file.arrayBuffer()
    await blob.uploadData(buffer, {
      blobHTTPHeaders: {
        blobContentType: file.type,
      },
    })
    return {
      url: blob.url.split('?')[0],
      blobName,
    }
  },
  getFile: async (args: { blobName: string }) => {
    const { blobName } = args
    const blob = container.getBlockBlobClient(blobName)
    const exists = await blob.exists()
    if (!exists) throw GQLError(404)
    return blob.url.split('?')[0]
  },
  deleteFile: async (args: { blobName: string }) => {
    const { blobName } = args
    const blob = container.getBlockBlobClient(blobName)
    const exists = await blob.exists()
    if (!exists) throw GQLError(404)
    await blob.delete()
    return true
  },
}

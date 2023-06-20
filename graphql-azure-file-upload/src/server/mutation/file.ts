import { builder } from '~/server/builder'
import { prisma } from '~/server/prisma'
import { blobUtil } from '~/util/blob'
import { GQLError } from '~/util/gql-error'

builder.mutationFields((t) => ({
  uploadFile: t.string({
    args: { file: t.arg({ type: 'FileScalar', required: true }) },
    resolve: async (_, args) => {
      const { file } = args

      const { url, blobName } = await blobUtil.uploadFile({ file })

      await prisma.file.create({
        data: {
          name: file.name,
          type: file.type,
          blobName,
          url,
        },
      })

      return url
    },
  }),
  deleteFile: t.boolean({
    args: { fileId: t.arg.int({ required: true }) },
    resolve: async (_, args) => {
      const { fileId } = args

      const file = await prisma.file.findUnique({ where: { id: fileId } })
      if (!file) throw GQLError(404)

      const res = await blobUtil.deleteFile({ blobName: file.blobName })
      if (!res) throw GQLError(500)

      await prisma.file.delete({ where: { id: fileId } })

      return true
    },
  }),
}))

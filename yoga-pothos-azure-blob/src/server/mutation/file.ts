import { builder } from '~/server/builder'
import { prisma } from '~/server/prisma'
import { blobUtil } from '~/util/blob'

builder.mutationFields((t) => ({
  uploadFile: t.string({
    args: { file: t.arg({ type: 'FileScalar', required: true }) },
    resolve: async (_, args) => {
      const { file } = args
      const url = await blobUtil.uploadFile({ file })
      await prisma.file.create({
        data: {
          name: file.name,
          type: file.type,
          url,
        },
      })
      return url
    },
  }),
}))

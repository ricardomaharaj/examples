import { builder } from '~/server/builder'

builder.scalarType('FileScalar', {
  serialize: (x) => x,
})

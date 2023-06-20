import { lexicographicSortSchema, printSchema } from 'graphql'
import fs from 'node:fs'
import { builder } from '~/server/builder'

import './mutation/file'
import './query/file'
import './scalars/file-scalar'
import './type/file'

export const schema = builder.toSchema()
fs.writeFileSync(
  './gql/schema.gql',
  printSchema(lexicographicSortSchema(schema)),
)

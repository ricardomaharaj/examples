import { lexicographicSortSchema, printSchema } from 'graphql'
import fs from 'node:fs'
import { builder } from '~/server/gql/builder'

import './mutation/seed'
import './query/user'
import './type/task'
import './type/user'

export const schema = builder.toSchema()

fs.writeFileSync(
  './gql/schema.gql',
  printSchema(lexicographicSortSchema(schema)),
)

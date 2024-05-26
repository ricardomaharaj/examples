import { writeFileSync } from 'fs'
import { lexicographicSortSchema, printSchema } from 'graphql'
import { env } from '~/server/env'
import { builder } from '~/server/gql/builder'

import './mutation/task/create-task'
import './query/task'
import './type/task'

export const schema = builder.toSchema()

if (env.NODE_ENV === 'development') {
  writeFileSync(
    './gql/schema.gql',
    printSchema(lexicographicSortSchema(schema)),
  )
}

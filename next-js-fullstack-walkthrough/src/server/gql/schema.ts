import { lexicographicSortSchema, printSchema } from 'graphql'
import fs from 'node:fs'
import { builder } from '~/server/gql/builder'

import './list/paginate'
import './list/task'
import './list/user'
import './mutation/task/create-task'
import './mutation/task/update-task'
import './query/task'
import './query/user'
import './type/location'
import './type/task'
import './type/user'

export const schema = builder.toSchema()

if (process.env.NODE_ENV === 'development') {
  fs.writeFileSync(
    './gql/schema.gql',
    printSchema(lexicographicSortSchema(schema)),
  )
}

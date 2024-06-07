import { writeFileSync } from 'fs'
import { lexicographicSortSchema, printSchema } from 'graphql'
import { env } from '~/server/env'
import { builder } from '~/server/gql/builder'

import './list/paginate'
import './list/task'
import './list/user'

import './mutation/seed'

import './query/task'
import './query/user'

import './type/location'
import './type/task'
import './type/user'

export const schema = builder.toSchema()

if (env.NODE_ENV === 'development') {
  writeFileSync(
    './gql/schema.gql',
    printSchema(lexicographicSortSchema(schema)),
  )
}

import fs from 'fs'
import { lexicographicSortSchema, printSchema } from 'graphql'
import { builder } from '~/server/builder'

import './mutation/task'
import './query/task'
import './type/task'

export const schema = builder.toSchema()

const schemaString = printSchema(lexicographicSortSchema(schema))
fs.writeFileSync('./gql/schema.gql', schemaString)

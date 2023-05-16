import { builder } from '~/server/builder'
import { lexicographicSortSchema, printSchema } from 'graphql'
import fs from 'fs'

import './types/user'
import './types/post'
import './types/comment'

import './queries/user'
import './queries/post'
import './queries/comment'

import './mutations/user'
import './mutations/post'
import './mutations/comment'
import './mutations/connections'

export const schema = builder.toSchema()

const schemaAsString = printSchema(lexicographicSortSchema(schema))
fs.writeFileSync('./gql/schema.gql', schemaAsString)

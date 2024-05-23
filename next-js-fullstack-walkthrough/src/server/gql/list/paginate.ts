import { builder } from '~/server/gql/builder'

export const paginateArgs = builder.args((t) => ({
  skip: t.int({ defaultValue: 0 }),
  take: t.int({ defaultValue: 10 }),
}))

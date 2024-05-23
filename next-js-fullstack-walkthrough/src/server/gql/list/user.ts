import type * as Pothos from '@pothos/core'
import { Prisma } from '@prisma/client'
import { builder } from '~/server/gql/builder'
import { paginateArgs } from '~/server/gql/list/paginate'
import { queryHelpers as qh } from '~/server/util/query-helpers'

const userListSort = builder.inputType('UserFilterSort', {
  fields: (t) => ({
    createdAt: t.boolean(),
    updatedAt: t.boolean(),
  }),
})

const userListSearch = builder.inputType('UserListSearch', {
  fields: (t) => ({
    name: t.string(),
    countries: t.stringList(),
    skills: t.stringList(),
  }),
})

const userListFilter = builder.inputType('UserListFilter', {
  fields: (t) => ({
    name: t.string(),
    countries: t.stringList(),
    skills: t.stringList(),
  }),
})

export const userListArgs = builder.args((t) => ({
  ...paginateArgs,
  search: t.field({ type: userListSearch }),
  filter: t.field({ type: userListFilter }),
  sort: t.field({ type: userListSort }),
}))

export function genUserListQuery(
  args: Pothos.InputShapeFromFields<typeof userListArgs>,
) {
  const query: Prisma.UserFindManyArgs = {
    skip: args.skip ?? 0,
    take: args.take ?? 10,

    orderBy: {
      createdAt: qh.boolSort(args.sort?.createdAt),
      updatedAt: qh.boolSort(args.sort?.updatedAt),
    },

    where: {
      AND: [
        { name: qh.strSearch(args.filter?.name) },
        { location: { country: qh.strArrSearch(args.filter?.countries) } },
        { skills: { hasEvery: qh.nonNull(args.filter?.skills) } },
        {
          OR: [
            { name: qh.strSearch(args.search?.name) },
            {
              location: { country: qh.strArrSearch(args.search?.countries) },
            },
            { skills: { hasSome: qh.nonNull(args.search?.skills) } },
          ],
        },
      ],
    },
  }

  return query
}

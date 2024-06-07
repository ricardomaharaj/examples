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
    email: t.string(),
    tags: t.stringList(),

    city: t.string(),
    province: t.string(),
    country: t.string(),

    cities: t.stringList(),
    provinces: t.stringList(),
    countries: t.stringList(),
  }),
})

const userListFilter = builder.inputType('UserListFilter', {
  fields: (t) => ({
    name: t.string(),
    email: t.string(),
    tags: t.stringList(),

    city: t.string(),
    province: t.string(),
    country: t.string(),

    cities: t.stringList(),
    provinces: t.stringList(),
    countries: t.stringList(),
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
        { email: qh.strSearch(args.filter?.email) },
        { tags: qh.strArrSearch(args.filter?.tags, 'hasEvery') },

        { location: { city: qh.strSearch(args.filter?.city) } },
        { location: { province: qh.strSearch(args.filter?.province) } },
        { location: { country: qh.strSearch(args.filter?.country) } },

        { location: { city: { in: qh.nonNull(args.filter?.cities) } } },
        { location: { province: { in: qh.nonNull(args.filter?.provinces) } } },
        { location: { country: { in: qh.nonNull(args.filter?.countries) } } },

        {
          OR: [
            { name: qh.strSearch(args.search?.name) },
            { email: qh.strSearch(args.search?.email) },
            { tags: qh.strArrSearch(args.search?.tags, 'hasSome') },

            { location: { city: qh.strSearch(args.search?.city) } },
            { location: { province: qh.strSearch(args.search?.province) } },
            { location: { country: qh.strSearch(args.search?.country) } },

            { location: { city: { in: qh.nonNull(args.search?.cities) } } },
            {
              location: {
                province: { in: qh.nonNull(args.search?.provinces) },
              },
            },
            {
              location: { country: { in: qh.nonNull(args.search?.countries) } },
            },
          ],
        },
      ],
    },
  }

  return query
}

import type * as Pothos from '@pothos/core'
import { Prisma } from '@prisma/client'
import { builder } from '~/server/gql/builder'
import { paginateArgs } from '~/server/gql/list/paginate'
import { queryHelpers as qh } from '~/server/util/query-helpers'

const taskListSort = builder.inputType('TaskFilterSort', {
  fields: (t) => ({
    createdAt: t.boolean(),
    updatedAt: t.boolean(),
  }),
})

const taskListSearch = builder.inputType('TaskListSearch', {
  fields: (t) => ({
    title: t.string(),
    desc: t.string(),
    users: t.stringList(),
  }),
})

const taskListFilter = builder.inputType('TaskListFilter', {
  fields: (t) => ({
    users: t.stringList(),
  }),
})

export const taskListArgs = builder.args((t) => ({
  ...paginateArgs,
  search: t.field({ type: taskListSearch }),
  filter: t.field({ type: taskListFilter }),
  sort: t.field({ type: taskListSort }),
}))

export function genTaskListQuery(
  args: Pothos.InputShapeFromFields<typeof taskListArgs>,
) {
  const query: Prisma.TaskFindManyArgs = {
    skip: args.skip ?? 0,
    take: args.take ?? 10,

    orderBy: {
      createdAt: qh.boolSort(args.sort?.createdAt),
      updatedAt: qh.boolSort(args.sort?.updatedAt),
    },

    where: {
      AND: [
        { users: { every: { id: { in: qh.nonNull(args.filter?.users) } } } },
        {
          OR: [
            { title: qh.strSearch(args.search?.title) },
            { desc: qh.strSearch(args.search?.desc) },
            { users: { some: { id: { in: qh.nonNull(args.search?.users) } } } },
          ],
        },
      ],
    },
  }

  return query
}

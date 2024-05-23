function nonNull<T>(val: T | null | undefined) {
  if (!val) return undefined
  return val
}

function strSearch(val: string | null | undefined) {
  if (!val) return undefined
  return { contains: val, mode: 'insensitive' as const }
}

function strArrSearch(val: string[] | null | undefined) {
  if (!val) return undefined
  return { in: val, mode: 'insensitive' as const }
}

// true = descending, false = ascending
function boolSort(val: boolean | null | undefined) {
  const isNull = val === null
  const isUndef = typeof val === 'undefined'

  if (isNull || isUndef) return undefined

  return val ? 'desc' : 'asc'
}

export const queryHelpers = {
  nonNull,
  boolSort,
  strSearch,
  strArrSearch,
}

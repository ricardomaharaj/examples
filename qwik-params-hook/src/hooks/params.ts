import { $, useComputed$ as $$ } from '@builder.io/qwik'
import { useLocation, useNavigate } from '@builder.io/qwik-city'

type Params = Record<string, string>

export function useParams<T extends Params>(defaults: T) {
  const loc = useLocation()
  const nav = useNavigate()

  const params = $$(() => {
    const params: Params = { ...defaults }
    for (const [key, val] of loc.url.searchParams) {
      params[key] = val ?? defaults[key]
    }
    return params as T
  })

  const rpl = $((upd: Partial<T>) => {
    const newParams = new URLSearchParams({
      ...defaults,
      ...upd,
    })
    nav(`?${newParams}`, { replaceState: true })
  })

  return { params, rpl }
}

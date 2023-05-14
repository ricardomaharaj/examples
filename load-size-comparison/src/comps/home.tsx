import { useNow } from '~/hooks/queries/now'

export function Home() {
  const [{ data }] = useNow()
  return <div>{data?.now}</div>
}

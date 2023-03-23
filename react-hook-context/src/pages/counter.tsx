import { Counter } from '@/comps/counter'
import { CounterCtxProvider } from '@/state/counter'

export default function CounterPage() {
  return (
    <>
      <CounterCtxProvider>
        <Counter />
      </CounterCtxProvider>
    </>
  )
}

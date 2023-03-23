import { createContext, ReactNode, useContext, useState } from 'react'

function useCounter() {
  const [count, setState] = useState(0)

  const increment = () => setState(count + 1)
  const decrement = () => setState(count - 1)

  return { count, increment, decrement }
}

type TCounterCtx = ReturnType<typeof useCounter>

const CounterCtx = createContext<TCounterCtx | null>(null)

export const useCounterCtx = () => useContext(CounterCtx)!

export function CounterCtxProvider(props: { children: ReactNode }) {
  const value: TCounterCtx = useCounter()
  return (
    <CounterCtx.Provider value={value}>{props.children}</CounterCtx.Provider>
  )
}

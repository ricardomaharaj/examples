import { useGlobalCtx } from '@/state/global'

export function Counter() {
  const ctx = useGlobalCtx()
  const { count, increment, decrement } = ctx.counter
  return (
    <>
      <div className='col'>
        <div>Counter:</div>
        <div>{count}</div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </>
  )
}

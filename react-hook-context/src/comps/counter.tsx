import { useCounterCtx } from '@/state/counter'

export function Counter() {
  const { count, increment, decrement } = useCounterCtx()
  return (
    <>
      <div className='row'>
        <button onClick={decrement}>-</button>
        <div>{count}</div>
        <button onClick={increment}>+</button>
      </div>
      <div className='row'>
        <div>count: {count}</div>
      </div>
    </>
  )
}

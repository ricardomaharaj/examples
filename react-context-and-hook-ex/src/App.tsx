import { useState } from 'react'
import { Todos } from './comps/todos'
import { TodoProvider } from './contexts/todo'

export function App() {
  let [hidden, setHidden] = useState(false)
  return (
    <>
      <div className='col m-2 space-y-2'>
        <button onClick={() => setHidden(!hidden)}>
          {hidden ? 'MOUNT' : 'UNMOUNT'} TODOS
        </button>
        <TodoProvider>{!hidden && <Todos />}</TodoProvider>
      </div>
    </>
  )
}

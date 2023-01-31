import { useState } from 'react'
import { Todos } from './comps/todos'
import { TodoProvider } from './contexts/todo'

export function App() {
  let [hideTodos, setHideTodos] = useState(false)

  return (
    <>
      <button className='bg1 p-2 mb-2' onClick={() => setHideTodos(!hideTodos)}>
        {hideTodos ? 'MOUNT' : 'UNMOUNT'} TODOS
      </button>
      <TodoProvider>{!hideTodos && <Todos />}</TodoProvider>
    </>
  )
}

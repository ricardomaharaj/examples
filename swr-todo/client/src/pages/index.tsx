import useSWR from 'swr'
import { TodoCard } from '../comps/todo-card'
import { Todo } from '../types/todo'
import { api } from '../api'
import { useRef } from 'react'

export function Home() {
  let { data, mutate } = useSWR<Todo[]>('/todos')
  let ref = useRef<HTMLInputElement>(null)

  let newTodo = () => {
    let todo = { task: ref.current?.value }
    api.post('/todos', todo)
    mutate()
  }

  let removeTodo = (id: number) => {
    api.delete('/todos/' + id)
    mutate()
  }

  let updateTodo = (id: number, task: string) => {
    api.put('/todos/' + id, { task })
    mutate()
  }

  return (
    <>
      <div className='row space-x-2'>
        <input ref={ref} type='text' className='bg1 p-2 w-[80%]' />
        <button className='bg1 p-2 w-[20%]' onClick={newTodo}>
          Create
        </button>
      </div>

      {data?.map((todo, i) => (
        <TodoCard
          todo={todo}
          onDelete={removeTodo}
          onEdit={updateTodo}
          key={i}
        />
      ))}
    </>
  )
}

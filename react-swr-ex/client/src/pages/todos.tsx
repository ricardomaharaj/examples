import { Link, useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import { Todo } from '../types/todo'

export function Todos() {
  let getTodos = useSWR<Todo[]>('/todos')
  let todos = getTodos.data

  const nav = useNavigate()

  return (
    <>
      <div className=''>
        {todos ? (
          <div className='space-y-2'>
            {todos.map((todo, i) => (
              <div key={i} className='row bg1 p-2 justify-between'>
                <div>{todo.task}</div>
                <Link to={`/todos/${todo.id}`} className='bg2 px-2'>
                  EDIT
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <code>loading...</code>
        )}
      </div>
    </>
  )
}

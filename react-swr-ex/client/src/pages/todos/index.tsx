import { Todo } from '../../types/todo'
import { Link } from 'react-router-dom'
import useSWR from 'swr'

export function Todos() {
  let { data: todos, error, isLoading } = useSWR<Todo[]>('/todos')

  return (
    <>
      <div>
        {isLoading && <code>loading...</code>}
        {error && <code>error</code>}
        {todos && (
          <div className='space-y-2'>
            {todos.map((todo, i) => (
              <div key={i} className='row bg1 p-2 justify-between'>
                <div>{todo.task}</div>
                <div className='row space-x-2'>
                  <Link to={`/todos/${todo.id}`} className='bg2 px-2'>
                    EDIT
                  </Link>
                  <Link to={`/todos/multiple/${todo.id}`} className='bg2 px-2'>
                    MULTIPLE
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

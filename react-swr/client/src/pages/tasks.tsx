import { Link } from 'react-router-dom'
import useSWR from 'swr'

import type { Task } from '../types/task'

export function Tasks() {
  const { data: tasks, error, isLoading } = useSWR<Task[]>('/tasks')

  return (
    <>
      <div>
        {isLoading && <code>loading...</code>}
        {error && <code>error</code>}
        {tasks && (
          <>
            {tasks.map((todo) => (
              <div key={todo.id} className='row bg1 justify-between p-2'>
                <code className='row space-x-4 p-2'>
                  <div>{todo.task}</div>
                  <div>{new Date(todo.updatedAt).toLocaleString()}</div>
                </code>
                <div className='row space-x-2'>
                  <Link className='bg2 p-2' to={`edit/${todo.id}`}>
                    EDIT
                  </Link>
                  <Link className='bg2 p-2' to={`multi/${todo.id}`}>
                    MULTIPLE
                  </Link>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  )
}

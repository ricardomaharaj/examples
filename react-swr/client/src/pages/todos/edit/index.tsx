import { Todo } from '../../../types/todo'
import { api } from '../../../consts'
import { useNavigate, useParams } from 'react-router-dom'
import { useRef } from 'react'
import useSWR from 'swr'

export function EditTodo() {
  const { id } = useParams()
  const { data: todo, error, isLoading } = useSWR<Todo>(`/todos/${id}`)

  const taskRef = useRef<HTMLInputElement>(null)
  const nav = useNavigate()

  const update = () => {
    api.put(`/todos/${id}`, { task: taskRef.current!.value }).then(() => {
      nav('/todos')
    })
  }

  const remove = () => {
    api.delete(`/todos/${id}`).then(() => {
      nav('/todos')
    })
  }

  return (
    <>
      <div>
        {isLoading && <code>loading...</code>}
        {error && <code>error</code>}
        {todo && (
          <div className='row space-x-2 bg1 p-2'>
            <input
              className='bg2 p-2'
              type='text'
              ref={taskRef}
              placeholder='Task'
              defaultValue={todo.task}
            />
            <button onClick={update} className='bg2 p-2'>
              UPDATE
            </button>
            <button onClick={remove} className='bg2 p-2'>
              REMOVE
            </button>
          </div>
        )}
      </div>
    </>
  )
}

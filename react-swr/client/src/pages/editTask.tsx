import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'

import type { Task } from '../types/task'

import { api } from '../consts'

export function EditTask() {
  const { id } = useParams()
  const { data: task, error, isLoading } = useSWR<Task>(`/tasks/${id}`)

  const taskRef = useRef<HTMLInputElement>(null)
  const nav = useNavigate()

  const update = () => {
    api.patch(`/tasks/${id}`, { task: taskRef.current!.value }).then(() => {
      nav('/tasks')
    })
  }

  const remove = () => {
    api.delete(`/tasks/${id}`).then(() => {
      nav('/tasks')
    })
  }

  return (
    <>
      <div>
        {isLoading && <code>loading...</code>}
        {error && <code>error</code>}
        {task && (
          <div className='row bg1 space-x-2 p-2'>
            <input
              className='bg2 p-2'
              type='text'
              ref={taskRef}
              placeholder='Task'
              defaultValue={task.task}
            />
            <button onClick={update} className='bg2 p-2'>
              UPDATE
            </button>
            <button onClick={remove} className='bg2 p-2'>
              DELETE
            </button>
          </div>
        )}
      </div>
    </>
  )
}

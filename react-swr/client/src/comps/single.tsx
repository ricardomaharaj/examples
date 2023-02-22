import useSWR from 'swr'

import type { Task } from '../types/task'

interface Props {
  id: string
}
export function Single(props: Props) {
  const { id } = props
  let { data: task, error, isLoading } = useSWR<Task>(`/tasks/${id}`)

  return (
    <>
      {isLoading && <code>loading...</code>}
      {error && <code>error</code>}
      {task && (
        <code className='row bg1 space-x-2 p-2'>
          <div className=''>id: {task.id}</div>
          <div className=''>task: {task.task}</div>
          <div className=''>
            createdAt: {new Date(task.createdAt).toLocaleString()}
          </div>
          <div className=''>
            updatedAt: {new Date(task.updatedAt).toLocaleString()}
          </div>
        </code>
      )}
    </>
  )
}

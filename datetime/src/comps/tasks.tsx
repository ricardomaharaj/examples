import { Task } from '@prisma/client'
import { formatISO } from 'date-fns'
import { useRef } from 'react'
import { type UseQueryExecute } from 'urql'
import { useCreateTask } from '~/hooks/mutations/create-task'
import { useDeleteTask } from '~/hooks/mutations/delete-task'
import { useUpdateTask } from '~/hooks/mutations/update-task'
import { useTasks } from '~/hooks/queries/tasks'

export function Tasks() {
  const [res, refresh] = useTasks({})
  const tasks = res.data?.tasks
  const [, createTask] = useCreateTask()

  const bodyRef = useRef<HTMLInputElement>(null)
  const dueDateRef = useRef<HTMLInputElement>(null)

  function createClicked() {
    createTask({
      body: bodyRef.current?.value,
      dueDate: dueDateRef.current?.valueAsDate ?? undefined,
    }).then(() => refresh({ requestPolicy: 'network-only' }))
  }

  return (
    <div className='col m-2 space-y-4'>
      <div className='row space-x-2'>
        <input ref={bodyRef} type='text' placeholder='New Task Body' />
        <div>Due:</div>
        <input ref={dueDateRef} type='date' />
        <button onClick={createClicked}>Create</button>
      </div>

      {tasks?.map((task) => (
        <TaskCard task={task} refresh={refresh} key={task.id} />
      ))}
    </div>
  )
}

function TaskCard(props: { task: Task; refresh: UseQueryExecute }) {
  const { task, refresh } = props

  const [, updateTask] = useUpdateTask()
  const [, deleteTask] = useDeleteTask()

  const bodyRef = useRef<HTMLInputElement>(null)
  const dueDateRef = useRef<HTMLInputElement>(null)

  function updateClicked() {
    const dueDate = dueDateRef.current?.value
    const dueDateISO = dueDate ? formatISO(new Date(dueDate)) : undefined

    updateTask({
      taskId: task.id,
      body: bodyRef.current?.value,
      dueDate: dueDateISO ?? null,
    }).then(() => refresh({ requestPolicy: 'network-only' }))
  }

  function deleteClicked() {
    deleteTask({ taskId: task.id }).then(() =>
      refresh({ requestPolicy: 'network-only' }),
    )
  }

  return (
    <div className='row space-x-2'>
      <input
        ref={bodyRef}
        type='text'
        defaultValue={task.body ?? ''}
        placeholder={`Task id:${task.id} Body`}
      />
      <div>Due:</div>
      <input ref={dueDateRef} type='datetime-local' />
      <div>{task.updatedAt.toLocaleString()}</div>
      <button onClick={updateClicked}>Update</button>
      <button onClick={deleteClicked}>Delete</button>
    </div>
  )
}

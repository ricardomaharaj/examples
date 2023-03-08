import { Task } from '@/server/models/task'
import { trpc } from '@/util/trpc'
import { useRef } from 'react'

export default function Home() {
  const taskRef = useRef<HTMLInputElement>(null)

  const { data: tasks, refetch } = trpc.task.getAll.useQuery()

  const { mutateAsync: create } = trpc.task.create.useMutation()

  const createTask = async () => {
    const task = taskRef.current!.value
    if (!task) return
    await create({ task })
    refetch()
  }

  return (
    <>
      <div className='col space-y-2'>
        <div className='row space-x-2'>
          <input ref={taskRef} type='text' placeholder='New Task' />
          <button onClick={() => createTask()}>Add Task</button>
        </div>
        {tasks?.map((task) => (
          <TaskCard key={task.id} task={task} refetch={refetch} />
        ))}
      </div>
    </>
  )
}

function TaskCard(props: { task: Task; refetch: () => void }) {
  const taskRef = useRef<HTMLInputElement>(null)

  const { task, refetch } = props

  const { mutateAsync: update } = trpc.task.update.useMutation()
  const { mutateAsync: remove } = trpc.task.delete.useMutation()

  const updateTask = async () => {
    const val = taskRef.current!.value
    if (!val || val === task.task) return
    await update({ id: task.id, task: val })
    refetch()
  }
  const deleteTask = async () => {
    await remove({ id: task.id })
    refetch()
  }

  return (
    <>
      <div className='row space-x-2'>
        <input ref={taskRef} type='text' defaultValue={task.task} />
        <div className='mt-1'>
          {new Date(task.updatedAt).toLocaleDateString()}
        </div>
        <div className='mt-1'>
          {new Date(task.updatedAt).toLocaleTimeString()}
        </div>
        <button onClick={() => updateTask()}>Update</button>
        <button onClick={() => deleteTask()}>Delete</button>
      </div>
    </>
  )
}

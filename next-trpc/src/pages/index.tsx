import { TRPC } from '@/util/trpc'
import { Task } from '@prisma/client'
import { useRef } from 'react'

export default function Home() {
  const ref = useRef<HTMLInputElement>(null)

  const { data: tasks, refetch } = TRPC.task.getAll.useQuery()
  const { mutateAsync: create } = TRPC.task.create.useMutation()

  async function createTask() {
    const val = ref.current!.value
    if (!val) return
    await create({ body: val })
    ref.current!.value = ''
    refetch()
  }

  return (
    <>
      <div className='col'>
        <div className='row'>
          <input ref={ref} type='text' placeholder='New Task' />
          <button onClick={createTask}>Add Task</button>
        </div>
        {tasks?.map((task) => (
          <TaskCard task={task} refetch={refetch} key={task.id} />
        ))}
      </div>
    </>
  )
}

interface TaskCardProps {
  task: Task
  refetch: ReturnType<typeof TRPC.task.getAll.useQuery>['refetch']
}
function TaskCard(props: TaskCardProps) {
  const { task, refetch } = props
  const { id, body, date } = task

  const { mutateAsync: update } = TRPC.task.update.useMutation()
  const { mutateAsync: remove } = TRPC.task.delete.useMutation()

  const ref = useRef<HTMLInputElement>(null)

  async function updateTask() {
    const val = ref.current!.value
    if (!val || val === body) return
    await update({ id, body: val })
    refetch()
  }

  async function deleteTask() {
    await remove({ id })
    refetch()
  }

  return (
    <>
      <div className='row'>
        <input ref={ref} type='text' placeholder={body} defaultValue={body} />
        <div>{date.toLocaleString()}</div>
        <button onClick={updateTask}>Update</button>
        <button onClick={deleteTask}>Delete</button>
      </div>
    </>
  )
}

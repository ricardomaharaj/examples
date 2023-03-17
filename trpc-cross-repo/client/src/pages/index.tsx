import { Task } from '@prisma/client'
import { api } from '@/trpc'
import { useRef } from 'react'

export default function Home() {
  const { data: tasks, refetch } = api.task.getAll.useQuery()
  const { mutateAsync: create } = api.task.create.useMutation()
  const ref = useRef<HTMLInputElement>(null)

  async function createTask() {
    const val = ref.current!.value
    if (!val) return
    try {
      await create({ body: val })
      refetch()
      ref.current!.value = ''
    } catch (error) {
      console.error(error)
    }
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
  refetch: ReturnType<typeof api.task.getAll.useQuery>['refetch']
}
function TaskCard(props: TaskCardProps) {
  const ref = useRef<HTMLInputElement>(null)
  const { refetch } = props
  const { id, body, date } = props.task
  const { mutateAsync: update } = api.task.update.useMutation()
  const { mutateAsync: remove } = api.task.delete.useMutation()

  async function updateTask() {
    const val = ref.current!.value
    if (!val || val === body) return
    try {
      await update({ id, body: val })
      refetch()
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteTask() {
    try {
      await remove({ id })
      refetch()
    } catch (error) {
      console.error(error)
    }
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

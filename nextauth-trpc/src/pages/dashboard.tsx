import { getServerAuthSession } from '@/util/auth'
import { TRPC } from '@/util/trpc'
import { Task } from '@prisma/client'
import { useRef } from 'react'
import type { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerAuthSession({ req, res })
  if (!session) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    }
  }
  return {
    props: {},
  }
}

export default function Dashboard() {
  const { data: tasks, refetch } = TRPC.task.getAll.useQuery()
  const { mutateAsync: create } = TRPC.task.create.useMutation()
  const ref = useRef<HTMLInputElement>(null)

  async function addTask() {
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
          <button onClick={addTask}>Add Task</button>
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
  const { refetch } = props
  const { id, body, date } = props.task

  const ref = useRef<HTMLInputElement>(null)

  const { mutateAsync: update } = TRPC.task.update.useMutation()
  const { mutateAsync: remove } = TRPC.task.delete.useMutation()

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

import { Task } from '@prisma/client'
import Link from 'next/link'
import { Tasks } from '~/prisma'

function TaskCard({
  task: { id, body, createdAt, updatedAt },
}: {
  task: Task
}) {
  return (
    <div className='col'>
      <div>body: {body}</div>
      <div>created: {createdAt.toLocaleString()}</div>
      <div>updated: {updatedAt.toLocaleString()}</div>
      <div className='row'>
        <Link href={`/task/${id}`}>Edit</Link>
      </div>
    </div>
  )
}

export async function AllTasks() {
  const tasks = await Tasks.findMany()
  return (
    <div className='col'>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  )
}

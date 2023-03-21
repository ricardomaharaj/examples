import { Task } from '@prisma/client'
import { api } from '@/api'
import { useRef } from 'react'
import useSWR, { KeyedMutator } from 'swr'

export default function Home() {
  const { data: tasks, mutate } = useSWR<Task[]>('/tasks')
  const ref = useRef<HTMLInputElement>(null)

  async function addTask() {
    const val = ref.current!.value
    if (!val) return
    await api.post('/tasks', { body: val })
    ref.current!.value = ''
    mutate()
  }

  return (
    <>
      <div className='col'>
        <div className='row'>
          <input ref={ref} type='text' placeholder='New Task' />
          <button onClick={addTask}>Add Task</button>
        </div>
        {tasks?.map((task) => (
          <TaskCard task={task} mutate={mutate} key={task.id} />
        ))}
      </div>
    </>
  )
}

interface TaskCardProps {
  task: Task
  mutate: KeyedMutator<Task[]>
}
function TaskCard(props: TaskCardProps) {
  const { task, mutate } = props
  const { id, body, date } = task

  const ref = useRef<HTMLInputElement>(null)

  async function updateTask() {
    const val = ref.current!.value
    if (!val || val === body) return
    await api.patch(`/tasks/${id}`, { body: val })
    mutate()
  }

  async function deleteTask() {
    await api.delete(`/tasks/${id}`)
    mutate()
  }

  return (
    <>
      <div className='row'>
        <input ref={ref} type='text' placeholder={body} defaultValue={body} />
        <div>{new Date(date).toLocaleString()}</div>
        <button onClick={updateTask}>Update</button>
        <button onClick={deleteTask}>Delete</button>
      </div>
    </>
  )
}

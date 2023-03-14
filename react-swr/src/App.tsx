import { useRef } from 'react'
import useSWR, { KeyedMutator, SWRConfig } from 'swr'
import { api, fetcher } from './api'

type Task = {
  id: number
  task: string
}

export function App() {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <div className='col'>
          <Tasks />
        </div>
      </SWRConfig>
    </>
  )
}

function Tasks() {
  const { data: tasks, mutate } = useSWR<Task[]>('/tasks')
  const ref = useRef<HTMLInputElement>(null)

  async function addTask() {
    const val = ref.current!.value
    if (!val) return
    api.post('/tasks', { task: val }).then(() => mutate())
  }

  return (
    <>
      <div className='row'>
        <input type='text' placeholder='New Task' ref={ref} />
        <button onClick={addTask}>Add Task</button>
      </div>
      {tasks?.map((task) => (
        <TaskCard task={task} mutate={mutate} key={task.id} />
      ))}
    </>
  )
}

function TaskCard(props: { task: Task; mutate: KeyedMutator<Task[]> }) {
  const { mutate } = props
  const { id, task } = props.task
  const ref = useRef<HTMLInputElement>(null)

  async function updateTask() {
    const val = ref.current!.value
    if (!val) return
    api.patch(`/tasks/${id}`, { task: val }).then(() => mutate())
  }

  async function deleteTask() {
    api.delete(`/tasks/${id}`).then(() => mutate())
  }

  return (
    <>
      <div className='row'>
        <input type='text' defaultValue={task} placeholder={task} ref={ref} />
        <button onClick={updateTask}>Update</button>
        <button onClick={deleteTask}>Delete</button>
      </div>
    </>
  )
}

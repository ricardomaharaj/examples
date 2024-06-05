import { useMutation, useQuery } from 'urql'
import { createTaskMutation } from '~/gql/mutations/create-task'
import { tasksQuery } from '~/gql/queries/tasks'
import { Task } from '~/types/gql'

export default function Home() {
  const [tasksQueryRes, refreshTasks] = useQuery({ query: tasksQuery })
  const tasks = tasksQueryRes.data?.tasks

  const [createTaskRes, createTask] = useMutation(createTaskMutation)

  async function handleAddTask() {
    await createTask()

    /*
      tasks will not be auto refreshed if there are no tasks
      this solves that
    */
    if (!!tasks && tasks.length === 0) {
      refreshTasks({ requestPolicy: 'network-only' })
    }
  }

  return (
    <>
      <div>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <hr />
      <div>
        {tasks?.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </>
  )
}

function TaskCard({ task }: { task: Task }) {
  return (
    <>
      <div>
        <div>id: {task.id}</div>
        <div>createdAt {task.createdAt as string}</div>
        <div>updatedAt {task.updatedAt as string}</div>
      </div>
      <hr />
    </>
  )
}

import { useMutation, useQuery } from '~/gqty'

export default function Home() {
  const query = useQuery()
  const { isLoading } = query.$state
  const tasks = query.tasks

  const [createTask, mutateRes] = useMutation(
    (m) => {
      const task = m.createTask
      return task.id
    },
    { refetchQueries: [tasks] },
  )

  return (
    <>
      <div>
        <button onClick={() => createTask()}>
          {mutateRes.isLoading ? 'Creating...' : 'Create Task'}
        </button>
        {isLoading ? (
          <>
            <div>loading...</div>
          </>
        ) : (
          <>
            {tasks.map((task) => (
              <div key={task.id ?? 0}>
                {task.id} - {task.updatedAt}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  )
}

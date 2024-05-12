import useSWR, { SWRConfig } from 'swr'
import { Task, User } from '~/types'

const fetcher = (path: string) => fetch(`/api${path}`).then((res) => res.json())

export default function REST() {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <UsersList />
      </SWRConfig>
    </>
  )
}

function UsersList() {
  const { data: users, isLoading } = useSWR<User[]>('/user')

  if (isLoading) return <div>loading...</div>

  return (
    <>
      <div>
        {users?.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </>
  )
}

function UserCard({ user }: { user: User }) {
  return (
    <>
      <div>
        <div>{user.name}</div>
        <UserTask user={user} />
      </div>
      <hr />
    </>
  )
}

function UserTask({ user }: { user: User }) {
  const { data: task, isLoading } = useSWR<Task>(`/user/${user.id}/task`)

  if (isLoading) return <div>loading...</div>

  return (
    <>
      <div>
        <div>{task?.title}</div>
        <div>{task?.desc}</div>
      </div>
    </>
  )
}

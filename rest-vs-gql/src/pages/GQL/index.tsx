import {
  cacheExchange,
  createClient,
  fetchExchange,
  gql,
  Provider as Urql,
  useQuery,
} from 'urql'
import { Task, User } from '~/types'

const client = createClient({
  url: '/api/gql',
  exchanges: [cacheExchange, fetchExchange],
})

export default function GQL() {
  return (
    <>
      <Urql value={client}>
        <UsersList />
      </Urql>
    </>
  )
}

const query = gql<{ users: User[] }>`
  query {
    users {
      id
      name

      tasks {
        title
        desc
      }
    }
  }
`

function UsersList() {
  const [res] = useQuery({ query: query })
  const { fetching } = res

  if (fetching) return <div>loading...</div>

  const users = res.data?.users

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
        <UserTask task={user.tasks.at(0)} />
      </div>
      <hr />
    </>
  )
}

function UserTask({ task }: { task?: Task }) {
  return (
    <>
      <div>
        <div>{task?.title}</div>
        <div>{task?.desc}</div>
      </div>
    </>
  )
}

import useSWR from 'swr'
import { Todo } from '../types/todo'

interface Props {
  id: string
}
export function Single(props: Props) {
  const { id } = props
  let { data: todo, error, isLoading } = useSWR<Todo>(`/todos/${id}`)

  return (
    <>
      {isLoading && <code>loading...</code>}
      {error && <code>error</code>}
      {todo && (
        <div className='row bg1 p-2'>
          <code className='bg2 p-2'>{JSON.stringify(todo)}</code>
        </div>
      )}
    </>
  )
}

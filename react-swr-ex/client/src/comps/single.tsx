import useSWR from 'swr'
import { Todo } from '../types/todo'

export function Single() {
  let getTodo1 = useSWR<Todo>('/todos/1')
  let todo = getTodo1.data

  return (
    <>
      {getTodo1.error && <div className=''>{getTodo1.error}</div>}
      {todo ? (
        <div className='row bg1 p-2'>
          <code>{JSON.stringify(todo)}</code>
        </div>
      ) : (
        <code>loading...</code>
      )}
    </>
  )
}

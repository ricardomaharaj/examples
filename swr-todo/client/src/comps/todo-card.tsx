import { useRef } from 'react'
import { Todo } from '../types/todo'

type Props = {
  todo: Todo
  onEdit: Function
  onDelete: Function
}
export function TodoCard(props: Props) {
  const { todo, onDelete, onEdit } = props
  let ref = useRef<HTMLInputElement>(null)
  return (
    <>
      <div className='bg1 row justify-between p-2'>
        <input
          ref={ref}
          type='text'
          placeholder='Task'
          className='bg1'
          defaultValue={todo.task}
        />
        <div className='row space-x-2'>
          <button onClick={() => onEdit(todo.id, ref.current?.value)}>
            EDIT
          </button>
          <button onClick={() => onDelete(todo.id)}>DELETE</button>
        </div>
      </div>
    </>
  )
}

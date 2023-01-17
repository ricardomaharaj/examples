import axios from 'axios'
import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'
import { baseURL } from '../consts'
import { Todo } from '../types/todo'

export function EditTodo() {
  let { id } = useParams()
  let getTodoRes = useSWR<Todo>(`/todos/${id}`)
  let todo = getTodoRes.data

  let taskRef = useRef<HTMLInputElement>(null)
  let nav = useNavigate()

  const update = () => {
    axios
      .put(`${baseURL}/todos/${id}`, { task: taskRef.current!.value })
      .then(() => {
        nav('/todos')
      })
  }

  const remove = () => {
    axios.delete(`${baseURL}/todos/${id}`).then(() => {
      nav('/todos')
    })
  }

  return (
    <>
      <div className=''>
        {todo ? (
          <div className='row space-x-2'>
            <input
              className='bg1 p-2'
              type='text'
              ref={taskRef}
              placeholder='Task'
              defaultValue={todo.task}
            />
            <button onClick={update} className='bg2 p-2'>
              UPDATE
            </button>
            <button onClick={remove} className='bg2 p-2'>
              REMOVE
            </button>
          </div>
        ) : (
          <code>loading...</code>
        )}
      </div>
    </>
  )
}

import axios from 'axios'
import { useRef } from 'react'
import { baseURL } from '../consts'
import { useNavigate } from 'react-router-dom'

export function CreateTodo() {
  let taskRef = useRef<HTMLInputElement>(null)
  let nav = useNavigate()

  const create = () => {
    let todo = { task: taskRef.current!.value }
    axios.post(`${baseURL}/todos`, todo)
    nav('/todos')
  }

  return (
    <>
      <div className=''>
        <div className='row space-x-2'>
          <input
            className='bg1 p-2'
            type='text'
            ref={taskRef}
            placeholder='Task'
          />
          <button className='bg2 p-2' onClick={create}>
            CREATE
          </button>
        </div>
      </div>
    </>
  )
}

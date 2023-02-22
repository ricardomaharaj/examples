import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../consts'

export function CreateTask() {
  const taskRef = useRef<HTMLInputElement>(null)
  const nav = useNavigate()

  const create = () => {
    api.post('/tasks', { task: taskRef.current!.value }).then(() => {
      nav('/tasks')
    })
  }

  return (
    <>
      <div className='row bg1 space-x-2 p-2'>
        <input
          className='bg2 p-2'
          type='text'
          ref={taskRef}
          placeholder='Task'
        />
        <button className='bg2 p-2' onClick={create}>
          CREATE
        </button>
      </div>
    </>
  )
}

import { useRef } from 'react'
import { api } from '../../../consts'
import { useNavigate } from 'react-router-dom'

export function CreateTodo() {
  const taskRef = useRef<HTMLInputElement>(null)
  const nav = useNavigate()

  const create = () => {
    api.post('/todos', { task: taskRef.current!.value }).then(() => {
      nav('/todos')
    })
  }

  return (
    <>
      <div className='row space-x-2 bg1 p-2'>
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

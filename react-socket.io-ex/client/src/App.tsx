import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:4000')

export function App() {
  let textareaE = useRef<HTMLTextAreaElement>(null)
  let [id, setID] = useState('')

  useEffect(() => {
    socket.on('connect', () => {
      setID(socket.id)
    })
    socket.on('disconnect', () => {
      setID('')
    })

    socket.on('msg', (data) => {
      textareaE.current!.innerHTML += `${data.msg}\n`
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('msg')
    }
  }, [])

  return (
    <>
      {id && <div className='bg2 p-2'>Your ID: {id}</div>}
      <textarea className='bg1 p-2 h-[80vh]' disabled ref={textareaE} />
      <input
        className='bg1 p-2'
        placeholder='message'
        onKeyDown={(e) => {
          let msg = e.currentTarget.value
          if (e.key === 'Enter' && msg) {
            socket.emit('msg', { msg: `${socket.id}: ${msg}` })
          }
        }}
      />
    </>
  )
}

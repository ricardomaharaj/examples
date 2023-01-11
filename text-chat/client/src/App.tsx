import { useEffect, useRef } from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:4000')

export function App() {
  let textareaE = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    socket.on('connect', () => {
      console.log(`connected to socket.io with id ${socket.id}`)
    })
    socket.on('disconnect', () => {
      console.log('disconnected from socket.io')
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
      <div className='container mx-auto'>
        <div className='col m-2 space-y-2'>
          <input
            className='bg1 bubble'
            placeholder='message'
            onKeyDown={(e) => {
              let msg = e.currentTarget.value
              if (e.key === 'Enter' && msg) {
                socket.emit('msg', { msg: `${socket.id}: ${msg}` })
              }
            }}
          />

          <textarea
            className='bg1 bubble h-[80vh]'
            disabled
            ref={textareaE}
          ></textarea>
        </div>
      </div>
    </>
  )
}

import { Server, Socket } from 'socket.io'

const PORT = parseInt(process.env.PORT || '4000')

const io = new Server({ cors: {} })

io.on('connection', (socket: Socket) => {
  io.emit('msg', { msg: `${socket.id} joined` })
  socket.on('msg', (data) => {
    const { msg } = data
    io.emit('msg', { msg })
  })

  socket.on('disconnect', () => {
    io.emit('msg', { msg: `${socket.id} left` })
  })
})

io.listen(PORT)
console.log(`\nsocket.io listening on http://localhost:${PORT}\n`)

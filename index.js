var express = require('express')
var socket = require('socket.io')

//App setup 
var app = express()
var server = app.listen(4000, () => {
  console.log('listener to require on port 4000')
})

//Static files
app.use(express.static('public'))

//Socket setup
var io = socket(server)

//create a socket connection port 
io.on('connection', (socket) => {
  console.log('make socket connection', socket.id)

  socket.on('chat', (data) => {
    io.sockets.emit('chat', data)
  })

  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data)
  })
})


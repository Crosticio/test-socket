const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const path = require('path')

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index')
})

io.on('connection', (socket) => {
  socket.on('chat:message', data => {
      io.sockets.emit('chat:message', data.message)
  })
});

server.listen(app.get('port'), () => console.log(`Server on Port ${app.get('port')}`))
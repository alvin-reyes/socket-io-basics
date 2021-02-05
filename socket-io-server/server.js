var app = require('express')();
var server = require('http').Server(app);
//var io = require("socket.io");

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(8080, () => {
	console.log('listening on *:8080');
});
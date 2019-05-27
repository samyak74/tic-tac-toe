var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var rooms = 0;

app.use(express.static('.'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/game.html');
});

io.on('connection', function(socket){
	console.log('A user connected!'); // We'll replace this with our own events
});

server.listen(5000);
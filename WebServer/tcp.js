var net = require('net');

const PORT = 10102;
const HOST = 'localhost';

var clientHandler = function(socket){
	console.log('client connected');

	socket.on('data',function dataHandler(data){
		console.log(socket.remoteAddress,socket.remotePort,'send',data.toString());
		socket.write('server received\n');
	});

	socket.on('close',function(){
		console.log(socket.remoteAddress,socket.remotePort,'disconnected');
	});
};

var app = net.createServer(clientHandler);

app.listen(PORT,HOST);
console.log('tcp server running on tcp://',HOST,':',PORT);
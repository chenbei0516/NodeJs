var net = require('net');

const HOST = 'localhost';
const PORT = 10102;

var tcpClient = net.Socket();

tcpClient.connect(PORT,HOST,function(){
	console.log('connect success.');
	tcpClient.write('this is tcp client by Node.js.');
});

tcpClient.on('data',function(data){
	console.log('received:',data.toString());
});

tcpClient.on('close',function()
{
	console.log(tcpClient.remoteAddress,tcpClient.remotePort,'disconnected');
});
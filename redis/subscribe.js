var client = require('./client.js');

client.subscribe('testPublish');

client.on('message',function(channel,msg){
	console.log('client.on message,channel:',channel,'message',msg);
});
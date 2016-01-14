var client = require('./client');

client.sadd('testSets','a');
client.sadd('testSets','b');
client.sadd('testSets',1);

client.smembers('testSets',function(err,vals){
	console.log('client.smembers err,val:',err,vals);
});
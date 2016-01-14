var client = require('./client.js');

// client.rpush('testLists','a');
// client.rpush('testLists','b');
// client.rpush('testLists','c');
// client.rpush('testLists','d');
// client.rpush('testLists',1);
// client.lpush('testLists',2);
// client.lpush('testLists',3);

client.lpop('testLists',function(err,val){
	console.log('client.lpop,err,val:',err,val);
});
client.rpop('testLists',function(err,val){
	console.log('client.rpop,err,val:',err,val);
});


client.lrange('testLists',0,-1,function(err,lists){
	console.log('client.lrange,err,lists:',err,lists);
});
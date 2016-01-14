var redis = require('redis');

var client = redis.createClient(6379,'localhost');

// client.set('hello','this is a nodejs using redis');
client.set('hello',{a:1,b:2});
client.get('hello',function(err,val){
	console.log('redis get hello err,val:',err,val,typeof val);
});
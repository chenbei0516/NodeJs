var fs = require('fs');
fs.readFile(__filename,'utf8',function(err,data){
	console.log('readFile err,data',err,data);
});
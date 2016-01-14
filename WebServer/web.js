var http = require('http');

var web = http.createServer(function requestHandler(req,res){
	res.end('Hello Web!\n');
});
web.listen(10100);

console.log('http running on http://localhost:10100');
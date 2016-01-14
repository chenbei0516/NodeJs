var express = require('express');

var app = express();


/*path*/
app.get('/',function(req,res){
	res.end('Hello Express!\n');
});

/*Router*/
var Router = express.Router();

Router.get('/add',function(req,res){
	res.end('Router /add\n');
});

Router.get('/list',function(req,res){
	res.end('Router /list\n');
});

app.use('/post',Router);


app.route('/acticle')
.get(function(req,res){
	res.end('route /acticle get\n');
})
.post(function(req,res){
	res.end('route /acticle post\n');
});


app.param('newsId',function(req,res,next,newsId){
	req.newsId = newsId;
	next();
});

app.get('/news/:newsId',function(req,res){
	res.end('newsId:'+req.newsId+'\n');
});

app.listen(10101,function afterListen(req,res){
	console.log('http running on http://localhost:10101');
});
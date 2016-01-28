/*var express = require('express');
var router = express.Router();*/

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: '四川能级科技有限公司' });
});

module.exports = router;*/

module.exports = function(app){
	app.get('/',function(req,res,next){
		res.render('index',{title: '四川能级科技有限公司'});
	});
}

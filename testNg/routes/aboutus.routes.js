var AboutusController = require('../controllers/aboutus.server.controller');

// var express = require('express');
// var router = express.Router();
// /* GET about us page. */
// router.get('/', function(req, res, next) {
//   res.render('subpage', { title: '关于我们' });
// });

// module.exports = router;


module.exports = function(app){
	app.get('/aboutus',AboutusController.get);
	// app.get('/aboutus',function(req, res, next) {
	// 	AboutusController.get(function(req, res, next){
	// 		res.render('subpage', { title: '关于我们' });
	// 	});
 //  });
};

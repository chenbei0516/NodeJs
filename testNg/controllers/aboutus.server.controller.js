var mysql = require('../config/mysql.js');

var conn = mysql();

conn.connect();

module.exports = {
	get: function(req,res,next){
		var selectSQL = 'SELECT F_CLASS_NAME FROM T_ABOUT_US';
		conn.query(selectSQL,function(err,docs){
			if(err) return next(err);
			if(!docs){
				return next(new Error('AboutUs not Found !'));
			}
			// console.log(docs);
			// res.render('subpage', { title: '关于我们' });
			return res.json(docs);
		});
	}
};
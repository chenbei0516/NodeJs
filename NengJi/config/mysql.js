var mysql = require('mysql');
var config = require('./config.js');

module.exports = function(){
	var conn = mysql.createConnection({
		host: config.mysql.host,
		user: config.mysql.user,
		password: config.mysql.password,
		database: config.mysql.database,
		port: config.mysql.port,
		insecureAuth: config.mysql.insecureAuth
	});

	return conn;
}
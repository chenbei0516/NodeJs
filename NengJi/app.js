var express = require('./config/express.js');
var mysql = require('./config/mysql.js');
var conn = mysql();

// conn.connect();
// conn.end();

var app = express();

module.exports = app;
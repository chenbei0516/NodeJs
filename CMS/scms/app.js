var express = require('./config/express.js');
var mongodb = require('./config/mongoose.js');

var db = mongodb();
var app = express();

module.exports = app;
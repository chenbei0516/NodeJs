var mongoose = require('mongoose');
var uri = 'mongodb://username:password@hostname:port/databasename';
uri = 'mongodb://localhost/Mongodb';

mongoose.connect(uri);

var BookSchema = new mongoose.Schema({
	name:String,
	author:String,
	publishTime:Date
});

mongoose.model('Book',BookSchema);
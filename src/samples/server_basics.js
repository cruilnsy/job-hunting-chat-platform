const express = require('express');
const mongoose = require('mongoose');
// connect mongo
const DB_URL='mongodb://127.0.0.1:27017/imooc';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function() {
	console.log('mongo connect successfully');
});

const User = mongoose.model('user', new mongoose.Schema({
	user: {type: String, require: true},
	age: {type: Number, require: true}
}));

// mongoose create
// User.create({
// 	user: 'imooc',
// 	age: 18
// }, function (err, doc) {
// 	if (!err) {
// 		console.log(doc);
// 	} else {
// 		console.log(err);
// 	}
// });

// mongoose remove
// User.remove({
// 	age: 18
// }, function (err, doc) {
// 	console.log(doc);
// });

const app = express();

app.get('/', function(req, res) {
	res.send('<h1>Hello world</h1>');
});

app.get('/data', function(req, res) {
	User.find({}, function (err, doc) {
		res.json(doc);
	});
	// res.json({name: 'imooc Test', course: 'React'});
});

app.listen(9093, function() {
	console.log('Node app start at port 9093');
});
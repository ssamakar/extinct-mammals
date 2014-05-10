var api = require('./api');
var mammal = require('./mammal');

//require and initialize mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mammals');
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser());

//single
//module.exports = function

//multiple
//exports.fn = fn

app.get('/mammals', api.get);
app.get('/mammals/:id', api.get);

app.post('/', api.post);

app.listen(4000, function(){
	console.log("Searching for extinct mammals on port 4000");
});
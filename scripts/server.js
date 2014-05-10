//require and initialize express
var express = require('express');
var bodyparser = require('body-parser');
var app = express();


app.use(bodyparser());

//nodemon!!!!

app.listen(4000, function(){
	console.log("Searching for extinct mammals on port 4000");
});
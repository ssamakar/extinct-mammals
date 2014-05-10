//Two endpoints on /, one for GET and one for POST

var Mammal = require('./mammal.js');

exports.get = function(req, res){
	console.log("get request");
	console.log(req.params);
	if (req.params.type) {
		Mammal
			.find({type: req.params.type})
			.sort('name')
			.exec(function(err, mammals){
				res.json(201, mammals);
			});
	} else {
	//lots of method chaining! follow up with .exec() to actually run the function at the end.
		Mammal
			.find()
			.sort('name')
			.exec(function (err, mammals){
			// console.log(mammals);
			res.json(201, mammals);
		});
	}
}

exports.post = function(req, res){
	console.log(req.body);
	new Mammal({
			name: req.body.name,
			type: req.body.type,
			year_extinct: req.body.year_extinct
			})
		.save(function (err, mammal){
		res.json(201, mammal);
	});
}
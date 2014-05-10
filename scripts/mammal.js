//create a mammalSchema with three keys


var mongoose = require('mongoose');

mammalSchema = mongoose.Schema({
	name: String,
	type: String,
	year_extinct: Number
});

var Mammal = mongoose.model('Mammal', mammalSchema);

module.exports = Mammal;
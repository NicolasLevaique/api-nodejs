// set up mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
  firstname: {type: String },
  lastname: {type: String },
  pseudo: {type: String },
	score: {type: Number}
});

var User = mongoose.model('User', userSchema);

exports.userModel = User;

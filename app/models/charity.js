// set up mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Address = require('./address.js');

var charitySchema = Schema({
  name: {type: String },
  address: [Address.addressSchema]
});

var Charity = mongoose.model('Charity', charitySchema);

exports.charityModel = Charity;

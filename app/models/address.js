// set up mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addressSchema = Schema({
  num: {type: Number, min: 0 },
  road: {type: String },
  country: {type: String }
});

var addressModel = mongoose.model('Address', addressSchema);

exports.addressModel = addressModel;
exports.addressSchema = addressSchema;

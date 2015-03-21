// set up mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Address = require('./address.js');

var missionSchema = Schema({
  name: {type: String },
	maxParticipants: {type: Number},
  address: {type: Schema.ObjectId, ref: Address.addressSchema }
});

var Mission = mongoose.model('Mission', missionSchema);

exports.missionModel = Mission;

var swagger = require("swagger-node-express");
var url = require("url");
var errors = swagger.errors;
var params = swagger.params;

var logger = require('../log.js');

/* add model includes */
var Charity = require('../models/models.js').charityModel;
var Address = require('../models/models.js').addressModel;

function writeResponse (response, data) {
  response.header('Access-Control-Allow-Origin', "*");
  response.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  response.header("Content-Type", "application/json; charset=utf-8");
  response.send(JSON.stringify(data));
    logger.info('Responding with: ' + JSON.stringify(data));
}

exports.models = models = require("../models.js");

exports.getCharities = {
  'spec': {
    "description" : "",
    "path" : "/charities",
    "notes" : "",
    "summary" : "Finds charities by query",
    "method": "GET",
    "params" : [
      params.query("query", "TODO", "", false, false, "")
    ].concat([]).concat([]).concat([]),
    
    "type": "array",
    "items": {
      
      "$ref": "array"
    },
    // container
    
    
    "responseMessages" : [errors.invalid('id'), errors.notFound('array')],
    "nickname" : "getCharities"
  },
  'action': function (req,res) {
		logger.info('Retrieving all the charities');
    var result = {};
		Charity.find(function (err, charities) {
			if (err) {
				logger.error(err);
				result.status = 'error';
				result.statusMessage = 'Could not retrieve charities'; 
			}
			else {
				logger.info('success!!');
				result['status'] = 'success';
				logger.info('succe : ' + JSON.stringify(charities));
				result.charities = charities;
				logger.info('Response to getCharities: ' + JSON.stringify(result));
    		    writeResponse(res, result);
			}
		});   
  }
};
exports.addCharity = {
  'spec': {
    "description" : "Operations about pets",
    "path" : "/charities",
    "notes" : "",
    "summary" : "Add a new charity",
    "method": "POST",
    "params" : [].concat([]).concat([]).concat([
      params.body("body", "", "Charity object that needs to be added", true)
    ]),
    
    
    "type" : "",
    
    "responseMessages" : [errors.invalid('id'), errors.notFound('')],
    "nickname" : "addCharity"
  },
  'action': function (req,res) {
    logger.info('Adding charity: ' + JSON.stringify(req.body));
      var result = {};
      var a = new Address(req.body.address);
      var c = new Charity({ 'name': req.body.name, 'address': a});
      c.save(function(err) {
          if (err) {
              result.status = 'error';
              result.statusMessage = 'Could not save charity: ' + JSON.stringify(req.body);
          }
          else {
              result.status = 'success';
              result.charity = c;
          }
          writeResponse(res, result);
      })
  }
};
exports.getCharityById = {
  'spec': {
    "description" : "Operations about pets",
    "path" : "/charities/{charityId}",
    "notes" : "",
    "summary" : "Find charity by ID",
    "method": "GET",
    "params" : [].concat([
      params.path("charityId", "ID of charity that needs to be fetched")
    ]).concat([]).concat([]),
    
    
    "type" : "Charity",
    
    "responseMessages" : [errors.invalid('id'), errors.notFound('Charity')],
    "nickname" : "getCharityById"
  },
  'action': function (req,res) {
    
    writeResponse(res, {message: "how about implementing getCharityById as a GET method?"});    
  }
};
exports.updateCharity = {
  'spec': {
    "description" : "Operations about pets",
    "path" : "/charities/{charityId}",
    "notes" : "",
    "summary" : "Update an existing charity",
    "method": "PUT",
    "params" : [].concat([
      params.path("charityId", "Charity id that needs to be updated")
    ]).concat([]).concat([]),
    
    
    "type" : "",
    
    "responseMessages" : [errors.invalid('id'), errors.notFound('')],
    "nickname" : "updateCharity"
  },
  'action': function (req,res) {
    
    writeResponse(res, {message: "how about implementing updateCharity as a PUT method?"});    
  }
};
exports.deleteCharity = {
  'spec': {
    "description" : "Operations about pets",
    "path" : "/charities/{charityId}",
    "notes" : "",
    "summary" : "Deletes a charity",
    "method": "DELETE",
    "params" : [].concat([
      params.path("charityId", "Charity id to delete")
    ]).concat([
      params.header("api_key", "")
    ]).concat([]),
    
    
    "type" : "",
    
    "responseMessages" : [errors.invalid('id'), errors.notFound('')],
    "nickname" : "deleteCharity"
  },
  'action': function (req,res) {
    
    writeResponse(res, {message: "how about implementing deleteCharity as a DELETE method?"});    
  }
};

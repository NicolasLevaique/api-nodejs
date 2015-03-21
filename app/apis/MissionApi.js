var swagger = require("swagger-node-express");
var url = require("url");
var errors = swagger.errors;
var params = swagger.params;

/* add model includes */

function writeResponse (response, data) {
  response.header('Access-Control-Allow-Origin', "*");
  response.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  response.header("Content-Type", "application/json; charset=utf-8");
  response.send(JSON.stringify(data));
}

exports.models = models = require("../models.js");

exports.getCharities = {
  'spec': {
    "description" : "Operations about pets",
    "path" : "/missions",
    "notes" : "",
    "summary" : "Finds missions by query",
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
    
    writeResponse(res, {message: "how about implementing getCharities as a GET method?"});    
  }
};
exports.addMission = {
  'spec': {
    "description" : "Operations about pets",
    "path" : "/missions",
    "notes" : "",
    "summary" : "Add a new mission",
    "method": "POST",
    "params" : [].concat([]).concat([]).concat([
      params.body("body", "", "Mission object that needs to be added", true)
    ]),
    
    
    "type" : "",
    
    "responseMessages" : [errors.invalid('id'), errors.notFound('')],
    "nickname" : "addMission"
  },
  'action': function (req,res) {
    
    writeResponse(res, {message: "how about implementing addMission as a POST method?"});    
  }
};
exports.getMissionById = {
  'spec': {
    "description" : "Operations about pets",
    "path" : "/missions/{missionId}",
    "notes" : "",
    "summary" : "Find mission by ID",
    "method": "GET",
    "params" : [].concat([
      params.path("missionId", "ID of mission that needs to be fetched")
    ]).concat([]).concat([]),
    
    
    "type" : "Mission",
    
    "responseMessages" : [errors.invalid('id'), errors.notFound('Mission')],
    "nickname" : "getMissionById"
  },
  'action': function (req,res) {
    
    writeResponse(res, {message: "how about implementing getMissionById as a GET method?"});    
  }
};
exports.updateMission = {
  'spec': {
    "description" : "Operations about pets",
    "path" : "/missions/{missionId}",
    "notes" : "",
    "summary" : "Update an existing mission",
    "method": "PUT",
    "params" : [].concat([
      params.path("missionId", "Id of mission that needs to be updated")
    ]).concat([]).concat([]),
    
    
    "type" : "",
    
    "responseMessages" : [errors.invalid('id'), errors.notFound('')],
    "nickname" : "updateMission"
  },
  'action': function (req,res) {
    
    writeResponse(res, {message: "how about implementing updateMission as a PUT method?"});    
  }
};
exports.deleteMission = {
  'spec': {
    "description" : "Operations about pets",
    "path" : "/missions/{missionId}",
    "notes" : "",
    "summary" : "Deletes a mission",
    "method": "DELETE",
    "params" : [].concat([
      params.path("missionId", "Mission id to delete")
    ]).concat([
      params.header("api_key", "")
    ]).concat([]),
    
    
    "type" : "",
    
    "responseMessages" : [errors.invalid('id'), errors.notFound('')],
    "nickname" : "deleteMission"
  },
  'action': function (req,res) {
    
    writeResponse(res, {message: "how about implementing deleteMission as a DELETE method?"});    
  }
};
exports.addUserToMission = {
  'spec': {
    "description" : "Operations about pets",
    "path" : "/missions/{missionId}/users",
    "notes" : "",
    "summary" : "Add a user to a mission",
    "method": "POST",
    "params" : [].concat([
      params.path("missionId", "Id of the mission where a user is added")
    ]).concat([]).concat([
      params.body("body", "", "Informations needed to add a user to a mission", true)
    ]),
    
    
    "type" : "",
    
    "responseMessages" : [errors.invalid('id'), errors.notFound('')],
    "nickname" : "addUserToMission"
  },
  'action': function (req,res) {
    
    writeResponse(res, {message: "how about implementing addUserToMission as a POST method?"});    
  }
};

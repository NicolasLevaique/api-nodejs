var express = require("express")
 , url = require("url")
 , cors = require("cors")
 , app = express()
 , swagger = require("swagger-node-express")
 , mongoose = require("mongoose");

/**** Logging ******/
var logger = require('./app/log.js');
logger.info('Logging activated');

/******* DB *******/

mongoose.set('debug', true);
var db_username = "db_user";
var db_password = "db_password_editGG";
// api_key: azikty1224abcdefghij0123412789
mongoose.connect('mongodb://' + db_username + ':' + db_password + '@ds039331.mongolab.com:39331/db');

var db = mongoose.connection;
db.on('error', logger.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  logger.info('Connected to database');
});


var corsOptions = {
  credentials: true,
  origin: function(origin,callback) {
    if(origin===undefined) {
      callback(null,false);
    } else {
      callback(null,true);
    }
  }
};

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
//app.use(express.json());
//app.use(express.urlencoded());
app.use(cors(corsOptions));

var subpath = express();

app.use("/v1", subpath);

swagger.setAppHandler(subpath);

swagger.configureSwaggerPaths("", "api-docs", "")

var models = require("./app/models.js");

var UserApi = require("./app/apis/UserApi.js");
var MissionApi = require("./app/apis/MissionApi.js");
var CharityApi = require("./app/apis/CharityApi.js");

swagger.addModels(models)
  .addPOST(UserApi.addUserToMission)
  .addPOST(UserApi.createUser)
  .addPOST(UserApi.createUsersWithArrayInput)
  .addPOST(UserApi.createUsersWithListInput)
  .addGET(UserApi.loginUser)
  .addGET(UserApi.logoutUser)
  .addGET(UserApi.getUserByName)
  .addPUT(UserApi.updateUser)
  .addDELETE(UserApi.deleteUser)
  .addGET(MissionApi.getCharities)
  .addPOST(MissionApi.addMission)
  .addGET(MissionApi.getMissionById)
  .addPUT(MissionApi.updateMission)
  .addDELETE(MissionApi.deleteMission)
  .addPOST(MissionApi.addUserToMission)
  .addGET(CharityApi.getCharities)
  .addPOST(CharityApi.addCharity)
  .addGET(CharityApi.getCharityById)
  .addPUT(CharityApi.updateCharity)
  .addDELETE(CharityApi.deleteCharity)
  ;

// configures the app
swagger.configure("http://localhost:8002/v1", "0.1");

// configures the db
var mongooseModels = require('./app/models/models.js');
/*var charitySchema = new mongoose.Schema({
	name: String,
	address: String
});*/

/*var Charity = mongooseModels.charityModel;
var Address = mongooseModels.addressModel;
var addressRestos = new Address({num: 42, road: "rue de la paix", country: "France"});
var restos = new Charity({name: 'Restos du coeur', address: [addressRestos]});
restos.save(function (err, restos) {
  if (err) return logger.error(err);
});*/

/*addressRestos.save(function (err, address) {
  if (err) return logger.error(err);
  logger.info('yay saved ' + address);
});*/



//  start the server
app.listen(8002);

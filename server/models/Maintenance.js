const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define the Application model
const maintenanceSchema = new Schema({
  userId :  mongoose.Schema.Types.ObjectId,
  lastName : String,
  firstName : String,
  middleName : String,
  ssn : String,
  otherId : String,
  birthDate :  { type : Date, default : Date.now},
  aliases : String,
  email : String,
  phones : {type: Array, "default" : []},
  driversLicense : {
      "number" : String,
      "expiration" : { type : Date, default : Date.now},
      "state" : String
  },
  name : String,
  status: String,
  addresses : {type: Array, "default" : []},
  employments : {type: Array, "default" : []},
  occupants : {type: Array, "default" : []},
  pets : {type: Array, "default" : []},
  liquidFurniture : Boolean,
  needHandicapAccess : Boolean,
  grossIncome : Number,
  paymentInterval : String,
  bankAccounts : {type: Array, "default" : []},
  creditors : {type: Array, "default" : []},
  emergencyContacts : {type: Array, "default" : []},
  references : {type: Array, "default" : []},
  autos : {type: Array, "default" : []},
  bankruptcies : Boolean,
  evictions : Boolean,
  drugConvictions : Boolean,
  medicalMarijuana : Boolean,
  smoke : Boolean,
  createDate : { type : Date, default : Date.now},
  signDate : { type : Date, default : Date.now},
  signature : String
});


//Create the model className
const ModelClass = mongoose.model('maintenance', maintenanceSchema);

//Export the model
module.exports = ModelClass;

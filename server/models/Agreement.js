const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define the Agreement model
const agreementSchema = new Schema({
  userId :  mongoose.Schema.Types.ObjectId,
  landlordId :  mongoose.Schema.Types.ObjectId,
  occupants : {type: Array, "default" : []},
  beginDate : { type : Date, default : Date.now},
  term : String,
  expireDate : { type : Date, default : Date.now},
  basicLeaseTerms : {
      "aptNumber" : String,
      "address" : String,
      "monthlyRent" : Number,
      "securityDeposit" : Number,
      "remoteDeposit" : Number,
      "garageOrStorage" : Number,
      "lateRentCharge" : Number,
      "dishonoredCheck" : Number,
      "hotWater" : Boolean,
      "coldWater" : Boolean,
      "gas" : Boolean,
      "electrical" : Boolean,
      "gardening" : Boolean,
      "trash" : Boolean,
      "parkingAssignments" : {type: Array, "default" : []}
  },
  ackPossessionOfPremises : Boolean,
  ackRent : Boolean,
  payableTo : String,
  ackLateChargeBadCheck : Boolean,
  ackSecurityDeposit : Boolean,
  ackUtilities : Boolean,
  ackOccupancy : Boolean,
  ackCoResidents: Boolean,
  ackAcceptanceOfPremises: Boolean,
  ackKeys : Boolean,
  ackUseOfPremises : Boolean,
  ackWaterFurniture : Boolean,
  ackDamage : Boolean,
  ackSmoke : Boolean,
  ackCO2 : Boolean,
  ackLandlordEntry : Boolean,
  ackVehiclesAndParking : Boolean,
  ackSubletting : Boolean,
  ackLiablility : Boolean,
  ackPretermination : Boolean,
  ackRelocation : Boolean,
  ackDefault : Boolean,
  ackAttorneysFee : Boolean,
  ackRenewal : Boolean,
  ackTerminationMonthToMonth : Boolean,
  ackChangeInTerms : Boolean,
  ackWaiver : Boolean,
  ackReleaseOfInformation : Boolean,
  ackMegansLaw : Boolean,
  ackProp65 : Boolean,
  ackCommunityRules : Boolean,
  ackPetPolicy : Boolean,
  ackSatelliteDishAndAntenna : Boolean,
  ackPestControl : Boolean,
  ackMoldAndMildew : Boolean,
  ackTenantInsurance : Boolean,
  signatures : {type: Array, "default" : []},
  pets : {type: Array, "default" : []},
  parking : {type: Array, "default" : []},
  createDate : { type : Date, default : Date.now},
  signDate : { type : Date, default : Date.now},
  status: String,
});


//Create the model className
const ModelClass = mongoose.model('agreement', agreementSchema);

//Export the model
module.exports = ModelClass;

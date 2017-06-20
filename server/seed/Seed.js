//Constant definitions
const NODE_PORT = process.env.NODE_PORT || 3090;
const DB_SERVER = process.env.DB_SERVER || "localhost";
const DB_PORT = process.env.DB_PORT || 27017;
const NODE_ENV = process.env.NODE_ENV || 'dev';

//Load mongo orm and Schema
const mongoose = require('mongoose');
const User = require('../models/user');
const Application = require('../models/Application');
const Agreement = require('../models/Agreement');

//Load data
const userData = require('./UserData.js').data;
const applicationData = require('./ApplicationData.js').data;
const agreementData = require('./AgreementData.js').data;

//DB setup
const DB_URL=`mongodb://${DB_SERVER}:${DB_PORT}/rentbuddy`;
mongoose.connect(DB_URL);


//Seed data: first remove exisiting users, then create users
User.remove({}, function(err){
  if(err) return console.error(err);
  console.log("Users removed");

  User.create(userData, function (err, users){
    if(err) return console.error(err);
    console.log("Users Inserted");

  });

});


//Seed data: first remove exisiting applications, then create applications
Application.remove({}, function(err){
  if(err) return console.error(err);
  console.log("Applications removed");

  Application.create(apllicationData, function (err, application){
    if(err) return console.error(err);
    console.log("Applications Inserted");

  });

});

//Seed data: first remove exisiting agreements, then create agreemnts
Agreement.remove({}, function(err){
  if(err) return console.error(err);
  console.log("Agreements removed");

  Application.create(agreementData, function (err, agreement){
    if(err) return console.error(err);
    console.log("Agreements inserted");

  });

});


//Seed data: first remove exisiting applications, then create applications
Maintenance.remove({}, function(err){
  if(err) return console.error(err);
  console.log("Maintenance removed");

  Maintenance.create(maintenanceData, function (err, maintenance){
    if(err) return console.error(err);
    console.log("Maintenance inserted");

  });

});

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
    console.log("Inserted Users");

  });

});


//Seed data: first remove exisiting applications, then create applications
Application.remove({}, function(err){
  if(err) return console.error(err);
  console.log("Applications removed");

  Application.create(applicationData, function (err, doc){
    if(err) return console.error(err);
    console.log("Inserted Applications");

    //join user with application
    //Populate UserId - ObjectId
    User.findOne({email : "tenant@gmail.com"}, function(err, doc){
      if(err) return console.error(err);

      if(doc){
        console.log("Found one user");

        Application.findOneAndUpdate({email : "tenant@gmail.com"},
          { $set: {userId: doc._id}},{new : true}, function(err, doc){
            if (err) {return next(err);}

            if(!doc){
              console.log("Cannot update application");
            }else{
              console.log("Updated application with user");
            }
        });
      }
    });

    User.findOne({email : "aimbastari@gmail.com"}, function(err, doc){
      if(err) return console.error(err);

      if(doc){
        console.log("Found one user");

        Application.findOneAndUpdate({email : "aimbastari@gmail.com"},
          { $set: {userId: doc._id}},{new : true}, function(err, doc){
            if (err) {return next(err);}

            if(!doc){
              console.log("Cannot update application");
            }else{
              console.log("Updated application with user");
            }
        });
      }
    });



  });
});


//Seed data: first remove exisiting agreements, then connect tenants and landlords
Agreement.remove({}, function(err){
  if(err) return console.error(err);
  console.log("Agreement removed");

  Agreement.create(agreementData, function (err, doc){
    if(err) return console.error(err);
    console.log("Inserted Agreements");

    //join user with application
    //Populate UerId - ObjectId
    User.findOne({email : "tenant@gmail.com"}, function(err, doc){
      if(err) return console.error(err);

      if(doc){
        console.log("Found one tenant");

        //Find agreements
        Agreement.update({}, {$set: {userId: doc._id}}, {multi : true }, cb);
       console.log("Updated agreements with tenant");

        function cb (err, numAffected) {
          console.log(numAffected)  
        }

      }
    });

    User.findOne({email : "aimbastari@gmail.com"}, function(err, doc){
      if(err) return console.error(err);

      if(doc){
        console.log("Found one landlord");

        //Find agreements
        function cb (err, numAffected) {
             console.log(numAffected)  
        }
 
        Agreement.update({}, {$set: {landlordId: doc._id}}, {multi : true }, cb );
       console.log("Updated agreements with landlord");

      }
    });


  });
});


const Agreement = require('../models/Agreement');

const mongoose = require('mongoose');

//get Agreements
exports.getAgreements = function(req, res){
  const userId = req.user._id;

  Agreement.find({userId}, 'name beginDate expireDate status', function(err, docs){
    if(err){
      console.log(err);
      return res.status(422).send({error : "unable to retrieve Agreements"});
    }

    res.json(docs);

  });

}

//get agreement
exports.getAgreement = function(req, res){
  const _id = req.params.agreementId;

  Agreement.findOne({_id}, function(err, doc){
    if(err){
      console.log(err);
      return res.status(422).send({error : "unable to retrieve agreement"});
    }

    res.json(doc);

  });

}



exports.saveAgreement = function(req, res){
  const userId = req.user._id;
  console.log(req.body);

//  const _id = req.params.AgreementId;

  Agreement.findOneAndUpdate(
    {userId},
    req.body,
    {new : true},
    function(err, doc){
      if (err) {return next(err);}

      if(!doc){
        return res.status(422).send({error : 'Error saving agreement'});
      }

    res.json({agreement : doc});

  });
}

exports.deleteAgreement = function(req, res){
  const _id = req.params.agreementId;


  Agreement.remove({_id}, function(err){
    if (err) {return next(err);}

    //Delete worked. Return the exisitng Agreements for given user
    const userId = req.user._id;
    Agreement.find({userId}, {}, function(err, docs){
      if(err) {return next(err);}

      res.status(200).json(docs);

    });

  });
}

exports.createAgreement = function(req, res){
  const agreementData = req.agreementData;

  //Add the user id
  const userId = req.userId;
  agreementData.userId = userId;

  Agreement.create(agreementData, function (err,doc){
    if(err) return console.error(err);

    console.log("Created new Agreement");
    console.log(doc);

  });
}

exports.createNewAgreement = function(req, res){
  const agreementData = req.agreementData;

  //Add the user id
  const userId = req.userId;
  agreementData.userId = userId;

  Agreement.create(agreementData, function (err,doc){
    if(err) return console.error(err);

    console.log("Created new Agreement");
    console.log(doc);

  });
}


exports.copyAgreement = function(req, res){
  const _id = req.params.agreementId;

  Agreement.findById(_id).exec(
      function(err, doc) {
          doc._id = mongoose.Types.ObjectId();
          doc.isNew = true;
          doc.name = "copy of" + doc.name;
          doc.save(function(err, doc){
            if(err) {console.log(err); return res.status(201);}

            //Save worked. Return the exisitng Agreements for given user
            const userId = req.user._id;
            Agreement.find({userId}, {}, function(err, docs){
              if(err) {return next(err);}

              res.status(200).json(docs);

            });



            res.status("201");
          });
      }
  );

}

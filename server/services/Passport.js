
const passport = require('passport');
const User = require('../models/User');
const config = require('../Config');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

//Create local sratergy (uses email / password for initial signin, after used has signed up)
const localOptions = { usernameField: 'email'};
const localLogin = new LocalStrategy(localOptions, function(email, password, done){
  User.findOne({email : email}, function(err, user){
    if(err) {return done(err, false);}
    if(!user) {return done(null, false);}

    //compare passwords
    user.comparePassword(password, function(err, isMatch){
      if(err) {return done(err);}
      if(!isMatch){return done(null, false);}

      return done(null, user);

    });
  });
});

//Create JWT Strategy (JSON Webtoken Strategy)
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
  // See if the user ID exists in the payload
  User.findById(payload.sub, function(err, user){
    if(err) {return done(err, false);}

    if(user){
      done(null, user);
    }else{
      done(null, false);
    }
  });
});

//Initialise the middleware
passport.use(jwtLogin);
passport.use(localLogin);

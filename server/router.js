const Authentication = require('./controllers/Authentication');
const passportService = require('./services/Passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session : false});
const requireSignin = passport.authenticate('local', {session : false});

const Profile = require('./controllers/Profile');
const Application = require('./controllers/Application');
const Agreement = require('./controllers/Agreement');



module.exports = function(app){
  app.post('/signup', Authentication.signup);
  app.post('/signin', requireSignin, Authentication.signin);

  //This route is protected and need a JWT token
  app.get('/', requireAuth, function(req, res){
    res.send({message: 'Super Secret Message'});
  });

  //User edit profile routes


  //This route is protected and need a JWT token
  app.get('/creditreports', requireAuth, function(req, res){
    res.send({message: 'Super Secret Message'});
  });

  //This route is protected and need a JWT token
  app.get('/profile', requireAuth, function(req, res){
    res.send({user: req.user});
  });

  //This route is protected and need a JWT token
  app.post('/profile', requireAuth, Profile.saveProfile);


  //Application routes
  //This route is protected and need a JWT token
  app.get('/application', requireAuth, Application.getApplicationByUserId);

  app.get('/applications', requireAuth, Application.getApplications);

  //Get single application using param passed in
  app.get('/applications/:applicationId', requireAuth, Application.getApplication);

  //Get single application using userId
  app.get('/applications/:userId', requireAuth, Application.getApplicationByUserId);

  app.post('/application', requireAuth, Application.saveApplication);


  //Save single agreement
  app.post('/agreement', requireAuth, Agreement.saveAgreement);


  //A routes
  //This route is protected and need a JWT token
  app.get('/agreement', requireAuth, Agreement.getAgreementByUserId);


}

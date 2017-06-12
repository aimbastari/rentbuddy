const Authentication = require('./controllers/Authentication');
const passportService = require('./services/Passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session : false});
const requireSignin = passport.authenticate('local', {session : false});

const Profile = require('./controllers/Profile');
const Application = require('./controllers/Application');
const Agreement = require('./controllers/Agreement');



module.exports = function(app){
  app.post('/api/signup', Authentication.signup);
  app.post('/api/signin', requireSignin, Authentication.signin);

  //This route is protected and need a JWT token
  app.get('/api', requireAuth, function(req, res){
    res.send({message: 'Super Secret Message'});
  });

  //User edit profile routes


  //This route is protected and need a JWT token
  app.get('/api/creditreports', requireAuth, function(req, res){
    res.send({message: 'Super Secret Message'});
  });

  //This route is protected and need a JWT token
  app.get('/api/profile', requireAuth, function(req, res){
    res.send({user: req.user});
  });

  //This route is protected and need a JWT token
  app.post('/api/profile', requireAuth, Profile.saveProfile);


  //Application routes
  //This route is protected and need a JWT token
  app.get('/api/application', requireAuth, Application.getApplicationByUserId);

  app.get('/api/applications', requireAuth, Application.getApplications);

  //Get single application using param passed in
  app.get('/api/applications/:applicationId', requireAuth, Application.getApplication);

  //Get single application using userId
  app.get('/api/applications/:userId', requireAuth, Application.getApplicationByUserId);

  app.post('/api/application', requireAuth, Application.saveApplication);


  //Save single agreement
  app.post('/api/agreement', requireAuth, Agreement.saveAgreement);


  //Agreement routes
  //This route is protected and need a JWT token
  //app.get('/agreement', requireAuth, Agreement.getAgreementByUserId);

  app.get('/api/agreement', requireAuth, Agreement.getAgreements);

  app.get('/api/agreement/:agreementId', requireAuth, Agreement.getAgreement);


}
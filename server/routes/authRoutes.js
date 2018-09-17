const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/current_user', (req, res) => {
    if (!req.user) {
      res.send({message: 'You are not login!'})
    } else {
      res.send(req.user)
    }
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    if (!req.user) {
      res.send({message: 'You are logout!'})
    } else {
      res.send(req.user)
    }
  });
};
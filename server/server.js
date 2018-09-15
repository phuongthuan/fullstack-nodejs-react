const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/key');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true});

const app = express();

app.use(cookieSession({
  maxAge: (30 * 24 * 60 * 60 * 1000),
  keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// Start server
const port = process.env.PORT || 5000;
app.listen(port);


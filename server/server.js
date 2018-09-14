const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


const app = express();

passport.use(new GoogleStrategy());

// 820849889489-2l62hgnerhtneg65uuq6lbkehhfgbhg2.apps.googleusercontent.com
// oiaSW7ok5pKyIGNz9_7TsLCi



// Route
app.get('/', (req, res) => {
  res.send({name: 'Carl'})
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});


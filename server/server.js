const express = require('express');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
const port = process.env.PORT || 3000;


// 820849889489-2l62hgnerhtneg65uuq6lbkehhfgbhg2.apps.googleusercontent.com
// oiaSW7ok5pKyIGNz9_7TsLCi


app.get('/', (req, res) => {
  res.send({name: 'Carl'});
});

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});


const mongoose = require('mongoose');
const {Schema} = mongoose;

const repicientSchema = new Schema({
  email: String,
  responded: {type: Boolean, default: false}
});

module.exports = repicientSchema;
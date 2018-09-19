const mongoose = require('mongoose');
const RecipientSchema = require('./Recipient');

const { Schema } = mongoose;

const surveySchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  title: {
    type: String,
    required: true,
    minLength: 1
  },
  body: {
    type: String,
    required: true,
    minLength: 1
  },
  subject: {
    type: String,
    required: true,
    minLength: 1
  },
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0},
  no: { type: Number, default: 0},
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);
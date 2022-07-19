const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const UserSchema = new Schema({
  nameSurname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    minlength: 6,
  },
  cryptoSalt: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now() },
  lastInitDate: { type: Date, default: Date.now() },
  deviceId: {
    type: String,
    required: true,
  },
  language: {
    type: String,
  },
  deviceInfo: {
    type: String,
  },
  correctGuesses: [
    { _id: false, content: ObjectId, date: Date },
  ],
  uncorrectGuesses: [
    { _id: false, content: ObjectId, date: Date },
  ],
},
{ versionKey: false });

const User = mongoose.model('User', UserSchema);
module.exports = User;

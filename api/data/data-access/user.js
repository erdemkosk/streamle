const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = {
  async getUser({ id }) {
    return (
      User
        .findById(mongoose.Types.ObjectId(id))
        .lean()
        .exec()
    );
  },

  async getUserWithEmail({ email }) {
    return (
      User
        .findOne({ email })
        .lean()
        .exec()
    );
  },

  async getUserWithEmailAndPassword({ email, password }) {
    return (
      User
        .findOne({ email, password })
        .lean()
        .exec()
    );
  },

  async getUserWithDeviceId({ deviceId }) {
    return (
      User
        .findOne({ deviceId })
        .lean()
        .exec()
    );
  },

  async createUser({
    email,
    password,
    nameSurname,
    cryptoSalt,
    deviceId,
    language,
    deviceInfo,
  }) {
    return (
      new User({
        email,
        password,
        nameSurname,
        cryptoSalt,
        deviceId,
        language,
        deviceInfo,
      }).save({
        lean: true,
      }));
  },

  async updateUserForInit({
    id,
    language,
    deviceType,
    ntfId,
    deviceInfo,
  }) {
    return (
      User
        .findOneAndUpdate({
          _id: id,
        }, {
          $set: {
            language,
            deviceType,
            ntfId,
            deviceInfo,
            lastInitDate: Date.now(),
          },
        }, { new: true })
        .lean()
        .exec()
    );
  },

  async addCorrectGuesses({
    id, contentId,
  }) {
    return (
      User
        .updateOne({
          _id: id,
        }, {
          $addToSet: {
            correctGuesses: contentId,
          },
        }, { new: true })
        .lean()
        .exec()
    );
  },
};

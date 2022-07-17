const userDataAccess = require('../../data/data-access/user');
const tokenService = require('../../server/services/token.js');
const { generateRandomSalt } = require('../../util/encyrption');

module.exports = {
  async init({
    deviceId,
    language,
    deviceInfo,
    token,
  }) {
    let user = await userDataAccess.getUserWithDeviceId({ deviceId });

    if (user) {
      await userDataAccess.updateUserForInit({
        id: user._id,
        language,
        deviceInfo,
      });
    }

    if (!user) {
      const salt = generateRandomSalt(16);

      user = await userDataAccess.createUser({
        deviceId,
        cryptoSalt: salt,
        language,
        deviceInfo,
      });
    }

    if (token) {
      return {
        accessToken: token,
      };
    }

    const { accessToken } = await tokenService.generateToken({
      data: {
        userId: user._id,
        deviceId,
      },
    });

    return {
      accessToken,
    };
  },
};

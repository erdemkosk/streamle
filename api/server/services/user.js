const userDataAccess = require('../../data/data-access/user');
const logger = require('../../plugin/logger');

const {
  UserNotFoundOrWrongParameter,
} = require('../../util/error');

module.exports = {
  async getUser({ id }) {
    const user = await userDataAccess.getUser({ id });

    if (!user) {
      logger.error('[UserService - getUser failed]%o', {
        id,
      });
      throw new UserNotFoundOrWrongParameter();
    }

    return {
      user,
    };
  },

  async addCorrectGuesses({ id, contentId }) {
    const user = await userDataAccess.getUser({ id });

    if (!user) {
      logger.error('[UserService - addCorrectGuesses failed]%o', {
        id,
      });
      throw new UserNotFoundOrWrongParameter();
    }

    await userDataAccess.addCorrectGuesses({ id, contentId });

    return {
      success: true,
    };
  },

};

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

  async addGuesses({ id, contentId, isCorrect }) {
    const user = await userDataAccess.getUser({ id });

    if (!user) {
      logger.error('[UserService - addGuesses failed]%o', {
        id,
      });
      throw new UserNotFoundOrWrongParameter();
    }

    if (isCorrect) {
      await userDataAccess.addCorrectGuesses({ id, contentId });
    }

    else {
      await userDataAccess.addUncorrectGuesses({ id, contentId });
    }

    return {
      success: true,
    };
  },

};

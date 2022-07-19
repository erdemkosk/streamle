
/* eslint-disable consistent-return */
const { successResponse } = require('../../util/response');
const { tokenHelper } = require('../../util/token-helper');

const userService = require('../services/user');
const userFormatter = require('../../formatter/user');


module.exports = {
  async getUser(req, res) {
    const { userId } = tokenHelper(req);
    const { user } = await userService.getUser({ id: userId });

    return res.status(200).send(successResponse({ results: userFormatter({ user }) }));
  },

  async addGuesses(req, res) {
    const { userId } = tokenHelper(req);

    const { contentId, finalGuess } = req.body;

    const { success } = await userService.addGuesses({ id: userId, contentId, finalGuess });

    return res.status(200).send(successResponse({ results: success }));
  },
};

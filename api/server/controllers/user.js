
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

  async addCorrectGuesses(req, res) {
    const { userId } = tokenHelper(req);

    const { contentId } = req.body;

    const { success } = await userService.addCorrectGuesses({ id: userId, contentId });

    return res.status(200).send(successResponse({ results: success }));
  },
};

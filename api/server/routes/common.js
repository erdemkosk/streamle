const router = require('express').Router();
// const { celebrate } = require('celebrate');

const {
  init,
} = require('../controllers/common');
// const schemas = require('../../validator/foo');

/**
 * @typedef UserInfo
 * @property {string} deviceId.body.required -  name - eg: deviceId
 * @property {string} language.body.required - language - eg: tr
 * @property {string} token.body.required - old token if user has old one
 * @property {string} deviceInfo.body.required - deviceInfo - apple
 */
/**
 * Call a init function for retrive token
 * @route POST /common/init
 * @group common - About common operations
 * @param {UserInfo.model} content.body.required
 * @returns {object} 200 - Return content
 * @returns {Error}  default - Unexpected error
 */

router.post('/init', init);

module.exports = router;

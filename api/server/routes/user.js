const router = require('express').Router();
const { celebrate } = require('celebrate');
const auth = require('../../middleware/authentication');
const schemas = require('../../validator/user');

const {
  getUser,
  addGuesses,
} = require('../controllers/user');
// const schemas = require('../../validator/foo');

/**
 * Get a single user with id
 * @route GET /user/
 * @group user - About user operations
 * @returns {object} 200 - return single user
 * @returns {Error}  default - Unexpected error
 */

router.get('/', auth.checkRequiredToken, celebrate(schemas.getUser), getUser);

/**
 * @typedef GuessModel
 * @property {string} contentId.body.required -  name - eg: 5ec28e2ae47cce0017b0b65d
 * @property {string} finalGuess.body.required -  name - eg: 5ec28e2ae47cce0017b0b65d
 */
/**
 * Call when user made a guesses
 * @route POST /user/add-guesses
 * @group user - About user operations
 * @param {GuessModel.model} content.body.required
 * @returns {object} 200 - Return content
 * @returns {Error}  default - Unexpected error
 */
router.post('/add-guesses', auth.checkRequiredToken, celebrate(schemas.addGuesses), addGuesses);

module.exports = router;

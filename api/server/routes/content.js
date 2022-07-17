const router = require('express').Router();
// const { celebrate } = require('celebrate');

const {
  getContent,
  addContent,
  updateContent,
  deleteContent,
  searchContent,
  getTodaysContent,
  getContentWithImdbPath,
} = require('../controllers/content');
// const schemas = require('../../validator/foo');

/**
 * Get a single content with id
 * @route GET /content/{id}
 * @group content - About content operations
 * @param {string} id.query.required 5ec28e2ae47cce0017b0b65d
 * @returns {object} 200 - return single content
 * @returns {Error}  default - Unexpected error
 */

router.get('/:id', getContent);

/**
 * Search endpoint for retrive and find one or multiple contents
 * @route GET /content/search/{text}
 * @group content - About content operations
 * @param {string} text.query.required tita
 * @returns {object} 200 - return single content
 * @returns {Error}  default - Unexpected error
 */

router.get('/search/:text', searchContent);

/**
 * Get content with using imdb path
 * @route GET /content/imdb-path/{imdbPath}
 * @group content - About content operations
 * @param {string} imdbPath.query.required tita
 * @returns {object} 200 - return single content
 * @returns {Error}  default - Unexpected error
 */

router.get('/imdb-path/:imdb_path', getContentWithImdbPath);

/**
 * Get a content withing published date ıf cannot find retrive random content
 * @route GET /content/todays/{publishedDate}
 * @group content - About content operations
 * @param {string} publishedDate.query.required 24/10/2022
 * @returns {object} 200 - return single content
 * @returns {Error}  default - Unexpected error
 */

router.get('/todays/:publishedDate', getTodaysContent);

/**
 * @typedef Content
 * @property {string} name.body.required -  name - eg: Test
 * @property {string} title.body.required - title - eg: Title
 * @property {string} description.body.required - description - eg: Description
 * @property {string} type.body.required - type - eg: Films -> 1 Series -> 2
 * @property {string} publishedDate.body.required - publishedDate - eg: 24/10/2022
 * @property {string} year_text.body.required - year_text - eg: 24/10/2022
 * @property {string} imdb_score.body.required - imdb_score - eg: 8
 * @property {string} imdb_path.body.required - imdb_path - eg: /title/1234
 * @property {string} poster_image_url.body.required - poster_image_url - eg: imahe-url
 * @property {Array.<string>} images.body.required - imahes - eg: img
 */
/**
 * Post a content
 * @route POST /content/
 * @group content - About content operations
 * @param {Content.model} content.body.required
 * @returns {object} 200 - Return content
 * @returns {Error}  default - Unexpected error
 */

router.post('/', addContent);

/**
 * Update a content
 * @route PUT /content/{id}
 * @group content - About content operations
 * @param {string} id.path.required - eg: 5e2f2f5737144e099c26c14b
 * @param {Content.model} content.body.required
 * @returns {object} 200 - Return content
 * @returns {Error}  default - Unexpected error
 */

router.put('/:id', updateContent);

/**
 * Delete a content
 * @route DELETE /content/{id}
 * @group content - About content operations
 * @param {string} id.path.required - eg: 5e2f2f5737144e099c26c14b
 * @returns {object} 200 - Return content
 * @returns {Error}  default - Unexpected error
 */

router.delete('/:id', deleteContent);


module.exports = router;

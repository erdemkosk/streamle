const { Joi, Segments } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);

const schemas = {
  getUser: {
    [Segments.QUERY]: {
    },
  },
  addGuesses: {
    [Segments.BODY]: {
      contentId: Joi.string().required(),
      finalGuess: Joi.string().required(),
    },
  },
};

module.exports = schemas;

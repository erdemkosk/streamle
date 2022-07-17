const { Joi, Segments } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);

const schemas = {
  getUser: {
    [Segments.QUERY]: {
    },
  },
  addCorrectGuesses: {
    [Segments.BODY]: {
      contentId: Joi.string().required(),
    },
  },
};

module.exports = schemas;

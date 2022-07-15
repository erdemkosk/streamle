/* eslint-disable no-unused-vars */
const {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
} = require('./base-errors');

module.exports = {
  TokenIsNotValid: {
    parentError: ForbiddenError,
    message: 'Token is not valid.',
    code: 2,
  },
  TokenIsNotSupplied: {
    parentError: ForbiddenError,
    message: 'Token is not supplied.',
    code: 3,
  },
  WarlockError: {
    parentError: NotFoundError,
    message: 'Warlock error.',
    code: 4,
  },
  ContentNotFound: {
    parentError: NotFoundError,
    message: 'Content not found.',
    code: 1000,
  },
  ContentCannotCreated: {
    parentError: NotFoundError,
    message: 'Content cannot created.',
    code: 1001,
  },
  ContentCannotUpdated: {
    parentError: NotFoundError,
    message: 'Content cannot updated.',
    code: 1002,
  },

};

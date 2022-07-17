/* eslint-disable func-names */
const bodyParser = require('body-parser');
const healthRoutes = require('./health');
const contentRoutes = require('./content');
const commonRoutes = require('./common');
const userRoutes = require('./user');

module.exports = function (app) {
  app.use(bodyParser.json({ limit: '10kb' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api/health/', healthRoutes);
  app.use('/api/content/', contentRoutes);
  app.use('/api/common/', commonRoutes);
  app.use('/api/user/', userRoutes);
};

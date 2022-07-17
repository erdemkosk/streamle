const { successResponse } = require('../../util/response');

const commonService = require('../services/common');

module.exports = {
  async init(req, res) {
    const {
      deviceId,
      language,
      deviceInfo,
      token,
    } = req.body;

    const { accessToken } = await commonService.init({
      deviceId,
      language,
      deviceInfo,
      token,
    });

    return res.status(200).send(successResponse({ results: accessToken }));
  },
};

/* eslint-disable consistent-return */
const { successResponse } = require('../../util/response');

const contentService = require('../services/content');
// const formatter = require('../../formatter/foo');

module.exports = {
  async getContent(req, res) {
    const { id } = req.query;

    const { content } = await contentService.getContent({ id });

    return res.status(200).send(successResponse({ results: content }));
  },

  async addContent(req, res) {
    const {
      name, title, description, type, publishedDate,
    } = req.body;

    const { content } = await contentService.addContent({
      name, title, description, type, publishedDate,
    });

    return res.status(200).send(successResponse({ results: content }));
  },

  async updateContent(req, res) {
    const { id } = req.params;

    const {
      name, title, description, type, publishedDate,
    } = req.body;

    const { content } = await contentService.updateContent({
      id, name, title, description, type, publishedDate,
    });

    return res.status(200).send(successResponse({ results: content }));
  },

  async deleteContent(req, res) {
    const { id } = req.query;

    const { success } = await contentService.deleteContent({ id });

    return res.status(200).send(successResponse({ results: success }));
  },

  async searchContent(req, res) {
    const { text } = req.query;

    const { contents } = await contentService.searchContent({ text });

    return res.status(200).send(successResponse({ results: contents }));
  },

  async getTodaysContent(req, res) {
    const { publishedDate } = req.query;

    const { content } = await contentService.getTodaysContent({ publishedDate });

    return res.status(200).send(successResponse({ results: content }));
  },
};

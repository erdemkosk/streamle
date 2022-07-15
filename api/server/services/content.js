const contentDataAccess = require('../../data/data-access/content');
const logger = require('../../plugin/logger');

const {
  ContentNotFound,
  ContentCannotCreated,
  ContentCannotUpdated,
} = require('../../util/error');

module.exports = {
  async getContent({ id }) {
    const content = await contentDataAccess.getContent({ id });

    if (!content) {
      logger.error('[ContentService - getContent failed]%o', {
        id,
      });

      throw new ContentNotFound();
    }

    return {
      content,
    };
  },

  async addContent({
    name, title, description, type, publishedDate,
  }) {
    const content = await contentDataAccess.addContent({
      name, title, description, type, publishedDate,
    });

    if (!content) {
      logger.error('[ContentService - title failed]%o', {
        name, title, description, type, publishedDate,
      });

      throw new ContentCannotCreated();
    }

    return {
      content,
    };
  },

  async updateContent({
    id, name, title, description, type, publishedDate,
  }) {
    const content = await contentDataAccess.updateContent({
      id, name, title, description, type, publishedDate,
    });

    if (!content) {
      logger.error('[ContentService - update failed]%o', {
        id, name, title, description, type, publishedDate,
      });

      throw new ContentCannotUpdated();
    }

    return {
      content,
    };
  },

  async deleteContent({
    id,
  }) {
    await contentDataAccess.deleteContent({
      id,
    });

    return {
      success: true,
    };
  },

  async searchContent({
    text,
  }) {
    const contents = await contentDataAccess.searchContent({
      text,
    });

    return {
      contents,
    };
  },

  async getTodaysContent({
    publishedDate,
  }) {
    let content;

    content = await contentDataAccess.findTodaysContentWithDate({
      publishedDate,
    });

    if (!content) {
      content = await contentDataAccess.findTodaysContentRandomise();
    }

    return {
      content,
    };
  },
};

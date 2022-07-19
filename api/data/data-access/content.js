/* eslint-disable camelcase */
const mongoose = require('mongoose');
const Content = require('../models/content');
const { MAX_SEARCH_COUNT } = require('../../constant');

module.exports = {
  async getContent({ id }) {
    return (
      Content.findById({ _id: id })
        .lean()
        .exec()
    );
  },

  async addContent({
    name,
    title,
    description,
    type,
    publishedDate,
    year_text,
    imdb_score,
    imdb_path,
    poster_image_url,
    images,
  }) {
    return (
      Content.findOneAndUpdate({ name },
        {
          $set: {
            title,
            description,
            type,
            publishedDate,
            year_text,
            imdb_score,
            imdb_path,
            poster_image_url,
            images,
          },
        },
        { upsert: true, new: true })
        .lean()
        .exec()
    );
  },

  async updateContent({
    id,
    name,
    title,
    description,
    type,
    publishedDate,
    year_text,
    imdb_score,
    imdb_path,
    poster_image_url,
    images,
  }) {
    return (
      Content.findByIdAndUpdate(id, {
        $set: {
          name,
          title,
          description,
          type,
          publishedDate,
          year_text,
          imdb_score,
          imdb_path,
          poster_image_url,
          images,
        },
      }, { new: true })
        .lean()
        .exec()
    );
  },

  async deleteContent({ id }) {
    return (
      Content.findByIdAndRemove({ _id: mongoose.Types.ObjectId(id) })
        .lean()
        .exec()
    );
  },

  async searchContent({ text }) {
    return (
      Content.find({ name: { $regex: text, $options: 'i' } })
        .limit(MAX_SEARCH_COUNT)
        .lean()
        .exec()
    );
  },

  async findTodaysContentRandomise() {
    return (
      Content.aggregate(
        [
          { $sample: { size: 1 } },
        ],
      )
    );
  },

  async findTodaysContentWithDate({ publishedDate }) {
    return (
      Content.findOne({ publishedDate })
        .lean()
        .exec()
    );
  },

  async getContentWithImdbPath({ imdbPath }) {
    return (
      Content.findOne({ imdb_path: imdbPath })
        .lean()
        .exec()
    );
  },
};

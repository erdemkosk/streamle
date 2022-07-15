const mongoose = require('mongoose');
const Content = require('../models/content');

module.exports = {
  async getContent({ id }) {
    return (
      Content.findById({ _id: id })
        .lean()
        .exec()
    );
  },

  async addContent({
    name, title, description, type, publishedDate,
  }) {
    return (
      Content.findOneAndUpdate({ name },
        {
          $set: {
            title,
            description,
            type,
            publishedDate,

          },
        },
        { upsert: true, new: true })
        .lean()
        .exec()
    );
  },

  async updateContent({
    id, name, title, description, type, publishedDate,
  }) {
    return (
      Content.findByIdAndUpdate(id, {
        $set: {
          name, title, description, type, publishedDate,
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
};

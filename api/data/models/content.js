const mongoose = require('mongoose');

const { Schema } = mongoose;

const ContentSchema = new Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now() },
  publishedDate: { type: String },
},
{ versionKey: false });

const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;

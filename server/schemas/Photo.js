const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  upvotes: { type: Number, default: 0 },
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;

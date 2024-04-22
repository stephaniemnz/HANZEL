const mongoose = require('mongoose');
const { Schema, model } = mongoose;
// const { Schema, model } = require('mongoose');

// Define the schema for your photo model
const photoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

// Create the Photo model using the photoSchema
const Photos = mongoose.model('Photo', photoSchema);

// Export the Photo model
module.exports = Photos;
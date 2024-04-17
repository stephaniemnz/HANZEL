const { Schema, model } = require('mongoose');

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
  imageUrl: {
    type: String,
    required: true
  }
});

// Create the Photo model using the photoSchema
const Photo = mongoose.model('Photo', photoSchema);

// Export the Photo model
module.exports = Photo;
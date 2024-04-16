const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Photo = model('Photo', photoSchema);

module.exports = Photo;
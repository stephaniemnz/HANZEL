const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://acuspikecris:MOL628826@clustercris.shb0f7p.mongodb.net/tech-thoughts');

module.exports = mongoose.connection;
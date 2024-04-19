
const mongoose = require('mongoose');

exports.connectToDatabase = () => {
    const dbUri = process.env.DB_URI;
    return mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
};

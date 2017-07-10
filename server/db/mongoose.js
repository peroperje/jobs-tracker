
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const mongoURL = process.env.MONGODB_URL || process.env.MONGODB_URI;
mongoose.connect(process.env.MONGODB_URL);

module.exports = {
  mongoose
};

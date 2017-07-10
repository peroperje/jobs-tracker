
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const mongoURL = process.env.MONGODB_URL || process.env.MONGODB_URI;
mongoose.connect(mongoURL);

module.exports = {
  mongoose
};

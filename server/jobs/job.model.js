const mongoose = require('mongoose');
const JobSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  URL: {
    type: String,
    required: true,
    minlength: 4,
    trim: true
  },
  clientLocation: {
    type: String,
    required: true,
    minlength: 4,
    trim: true
  },
  jobLocation: {
    type: String,
    required: true,
    minlength: 4,
    trim: true
  },
  comment: {
    type: String,
    required: true,
    minlength: 4,
    trim: true
  },
  active: {
    type: Boolean,
    default: true
  },
  _creator:{
    type: mongoose.Schema.ObjectId,
    required:true
  }
});

const Job = mongoose.model('Job', JobSchema);

module.exports = {
  Job
};


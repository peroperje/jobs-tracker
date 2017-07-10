const {ObjectId} = require('mongodb');

const mongoose = require('./../db/mongoose');
const {Job} = require('./job.model');

/**
 * @description Return list of objects
 * @param {Object} req express request object
 * @param {Object} res express request object
 */
const getJobs = (req, res) => {
  Job.find({
    _creator: req.cUser._id
  })
    .then(items => res.send(items))
    .catch(err => res.status(400).send(err));
};

/**
 * @descriptin Return single object by id
 * @param {Object} req express request object
 * @param {Object} res express response object
 * @return {Object} response object
 */
const getJob = (req, res) => {
  const id = req.params._id;
  if (!ObjectId.isValid(id)) {
    return res.status(404).send('Not Found');
  }
  Job.findOne({
    _id: id,
    _creator: req.cUser._id
  })
    .then(job => {
      if (!job) {
        return res.status(400).send();
      }
      res.send({job});
    })
    .catch(err => res.status(400).send(err));
};

/**
 * @description Add  new job
 * @param {Object} req express request object
 * @param {Object} res express response object
 */
const addJob = (req, res) => {
  const userData = Object.assign({}, req.body, {_creator: req.cUser._id});
  const job = new Job(userData);

  job.save()
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send(err));
};

const updateJob = (req, res) => {
  const id = req.params._id;
  const body = req.body;
  if (!ObjectId.isValid(id)) {
    return res.status(400).send('Not found');
  }
  Job.findOneAndUpdate({
    _id: id,
    _creator: req.cUser._id
  }, {
    $set: body
  }, {
    new: true
  })
    .then(job => {
      if (!job) {
        return res.status(400).send('Not found');
      }
      res.send(job);
    })
    .catch(err => res.status(400).send(err));
};

/**
 * @description Delete job
 * @param {Object} req express request object
 * @param {Object} res express response object
 * @return {Object} response
 */
const deleteJob = (req, res) => {
  const id = req.params._id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).send('Not Found');
  }
  Job.findOneAndRemove({
    _id: id,
    _creator: req.cUser._id
  })
    .then(job => {
      if (!job) {
        return res.status(400).send('Not found');
      }
      res.send({job});
    })
    .catch(err => res.status(400).send(err));
};

module.exports = {
  getJobs,
  getJob,
  addJob,
  updateJob,
  deleteJob
};

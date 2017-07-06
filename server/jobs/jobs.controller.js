const {ObjectId} = require('mongodb');

const mongoose = require('./../db/mongoose');
const {Job} = require('./job.model');

/**
 * @description Return list of objects
 * @param {Object} req express request object
 * @param {Object} res express request object
 */
const getJobs = (req, res) => {
  Job.find()
    .then(items => res.send(items))
    .catch(err => res.status(400).send(err));
};

/**
 * @descriptin Return single object by id
 * @param {Object} req express request object
 * @param {Object} res express response object
 */
const getJob = (req, res) => {
  const id = req.params._id;
  if (!ObjectId.isValid(id)) {
   return  res.status(404).send('Not Found');
  }
  Job.findOne({
    _id: id
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
  const job = new Job(req.body);
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
    _id: id
  }, {
    $set: body
  }, {
    new: true
  })
    .then(job=>{
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
 */
const deleteJob = (req, res) => {
  const id = req.params._id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).send('Not Found');
  }
  Job.findOneAndRemove({
    _id: id
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

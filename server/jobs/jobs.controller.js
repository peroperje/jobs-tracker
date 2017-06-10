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
    .then(jobs => res.send({jobs}))
    .catch(err => res.status(400).send(err));
};

/**
 * @descriptin Return single object by id
 * @param {} req
 * @param res
 */
const getJob = (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    res.status(404).send('Not Found');
  }
  console.log(id);
  Job.findOne({
    _id: id
  })
    .then(job => {
      if (!job) {
        res.status(400).send();
      }
      res.send({job});
    })
    .catch(err => res.status(400).send(err));
};


const addJob = (req, res) => {
  const job = new Job(req.body);
  job.save()
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send(err));
};

const updateJob = (req, res) => {
  res.send({});
};

const deleteJob = (req, res) => {
  res.send({});
};

module.exports = {
  getJobs,
  getJob,
  addJob,
  updateJob,
  deleteJob
};
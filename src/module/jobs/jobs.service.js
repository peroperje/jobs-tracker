import request from '../../service/request';

/**
 * @description Make api call for jobs
 * @return {Promise}
 */
const getJobs = () => request({
  url: 'jobs/',
  method: 'GET'
})
  .then(response => ({response}))
  .catch(error => ({error}));

/**
 * @description makes api call for create new job
 * @param {Object} data job object data
 * @return {Promise}
 */
const addJob = (data) => request({
  url: 'jobs',
  method: 'POST',
  data
})
  .then(response => ({response}))
  .catch(error => ({error}));

/**
 * @description Makes api call for update job
 * @param {String} _id id of job
 * @param {Object} data new data
 * @return {Promise}
 */
const updateJob = (_id, data) => request({
  url: `jobs/${_id}`,
  method: 'PATCH',
  data
})
  .then(response => ({response}))
  .catch(error => ({error}));

const deleteJob = (_id) => request({
  url: `jobs/${_id}`,
  method: 'DELETE'
})
  .then(response => ({response}))
  .catch(error => ({error}));

export {
  getJobs,
  addJob,
  updateJob,
  deleteJob
};

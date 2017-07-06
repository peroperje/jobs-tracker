import request from '../../service/request';

/**
 * @description Make api call for jobs
 */
const getJobs = () => request({
  url: 'jobs/',
  method: 'GET'
})
  .then(response => ({response}))
  .catch(error => ({error}));

export {
  getJobs
};

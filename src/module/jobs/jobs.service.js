import request from '../../service/request';


const getJobs = () => request({
  url: 'jobs/',
  method: 'GET'
})
  .then(response => ({response}))
  .catch(error => ({error}));

export {
  getJobs
};

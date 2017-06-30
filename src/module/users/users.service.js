import request from '../../service/request';

/**
 * @description Makes api call for sign up
 * @param {Object} data User data for sign up
 */
const signup = (data) => request({
  url: 'users/',
  method: 'POST',
  data: data
}).then(res => res)
  .catch(err => err);


export  {
  signup
};

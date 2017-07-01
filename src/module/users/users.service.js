import request from '../../service/request';

/**
 * @description Makes api call for sign up
 * @param {Object} data User data for sign up
 * @return {Promise}
 */
const signup = (data) => request({
  url: 'users/',
  method: 'POST',
  data: data
}).then(res => res.data)
  .catch(err => err);


export {
  signup
};

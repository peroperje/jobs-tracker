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

/**
 * @description Makes api call for login user
 * @param {Object} data user login data
 * @return {Promise}
 */
const login = (data) => request({
  url: 'login',
  method: 'POST',
  data: data
}).then(res => res.data).catch(e => e);

export {
  signup,
  login
};

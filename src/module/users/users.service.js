import request from '../../service/request';
import jwtStorage from '../../store/jwtStorage';


/**
 * @description Makes api call for sign up
 * @param {Object} data User data for sign up
 * @return {Promise}
 */
const signup = (data) => request({
  url: 'users/',
  method: 'POST',
  data: data
})
  .then(response => ({response}))
  .catch(error => ({error}));

/**
 * @description Makes api call for login user
 * @param {Object} data user login data
 * @return {Promise}
 */
const login = (data) => request({
  url: 'users/login',
  method: 'POST',
  data: data
})
  .then(response => ({response}))
  .catch(error => ({error}));

/**
 * @description Makes api call for me (check is use logged)
 * @return {Promise}
 */
const me = () => request({
  url: 'users/me',
  method: 'POST'
})
  .then(response => ({response}))
  .catch(error => {error});

export {
  signup,
  login,
  me
};

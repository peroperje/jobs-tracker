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
}).then(res => {
//todo move this to saga
  if (typeof res.headers !== 'undefined') {
    jwtStorage.setJWT(res.headers['x-auth']);
  }
  return res.data;
})
  .catch(err => err);

/**
 * @description Makes api call for login user
 * @param {Object} data user login data
 * @return {Promise}
 */
const login = (data) => request({
  url: 'users/login',
  method: 'POST',
  data: data
}).then(res => {
  //todo move this to saga
  if (typeof res.headers !== 'undefined') {
    jwtStorage.setJWT(res.headers['x-auth']);
  }
  return res.data;
}).catch(e => e);

const me = () => request({
  url: 'users/me',
  method: 'POST'
})
  .then(res => res.data)
  .catch(e => e);

export {
  signup,
  login,
  me
};

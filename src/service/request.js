import axios from 'axios';
import jwtStorage from '../store/jwtStorage';

const env = process.env.NODE_ENV || 'dev';

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: env === 'production' ? '/api/' : 'http://localhost:3000/api/'
});

/**
 * @description Request Wrapper with default success/error actions
 * @param {Object} options app call settings
 * @return {Promise}
 */
const request = function (options) {

  const onSuccess = function (response) {
    return response;
  };

  const onError = function (error) {
    return Promise.reject(error.response || error.message);
  };

  const jwt = jwtStorage.getJWT();

  if (jwt) {
    client.defaults.headers.common['x-auth'] = jwt;
  }
  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;

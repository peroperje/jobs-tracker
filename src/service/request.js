import axios from 'axios';
import jwtStorage from '../store/jwtStorage';

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: 'http://localhost:3000/api/'
});

const jwt = jwtStorage.getJWT();
if(jwt){
  client.defaults.headers.common['x-auth'] = jwt;
}

/**
 * @description Request Wrapper with default success/error actions
 * @param {Object} app call settings
 */
const request = function (options) {

  const onSuccess = function (response) {
    console.debug('Request Successful!', response);
    return response;
  };

  const onError = function (error) {
    console.error('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error('Full error:', error);
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);

    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;

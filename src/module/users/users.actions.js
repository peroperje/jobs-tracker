import {
  FETCH_SIGNUP_REQUSET,
  FETCH_SIGNUP_SUCCESS,
  FETCH_SIGNUP_FAILURE
} from './users.constant';

/**
 * @description Fetch sign up
 * @function fetchSignUp
 * @param {Object} data User form data
 * @return {Object} the redux action
 */
const fetchSignUp = (data) => ({
  type: FETCH_SIGNUP_REQUSET,
  payload:{
    data:data
  }
});

/**
 * @description Fetch sign up success
 * @param {Object} data user data
 * @return {Object} action object
 */
const fetchSignUpSuccess = (data) => ({
  type: FETCH_SIGNUP_SUCCESS,
  payload: {
    _id: data._id,
    firstName: data.firstName,
    surName: data.surName
  }
});

/**
 * @description Fetch sign up failure
 * @param {String} err error string
 * @return {Object} action object
 */
const fetchSignUpFailure = (err) => ({
  type: FETCH_SIGNUP_FAILURE,
  payload: {
    errorFetching: err
  }
});

export {
  fetchSignUp,
  fetchSignUpSuccess,
  fetchSignUpFailure
};

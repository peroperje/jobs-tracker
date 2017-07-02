import {
  FETCH_SIGNUP_REQUEST,
  FETCH_SIGNUP_SUCCESS,
  FETCH_SIGNUP_FAILURE,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE
} from './users.constant';

/**
 * @description Fetch sign up
 * @function fetchSignUp
 * @param {Object} data User form data
 * @return {Object} the redux action
 */
const fetchSignUp = (data) => ({
  type: FETCH_SIGNUP_REQUEST,
  payload: {
    data: data
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

/**
 * @description Action creatot for fetch login request
 * @param {Object} data login data
 * @return {Object} action
 */
const fetchLoginRequest = (data) => ({
  type: FETCH_LOGIN_REQUEST,
  payload: data
});

/**
 * @description fetch login success
 * @param {Object} data returned data from server
 * @return {Object} action
 */
const fetchLoginSuccess = (data) => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: {
    _id: data._id,
    firstName: data.firstName,
    surName: data.surName
  }
});

/**
 * @description action creator fetch login failure
 * @param {String} err error message
 * @return {Object} action
 */
const fetchLoginFailure = (err) => ({
  type: FETCH_LOGIN_FAILURE,
  payload: {
    errorFetching: err
  }
});

export {
  fetchSignUp,
  fetchSignUpSuccess,
  fetchSignUpFailure,
  fetchLoginRequest,
  fetchLoginSuccess,
  fetchLoginFailure
};

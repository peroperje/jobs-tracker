import {
  FETCH_SIGNUP_REQUEST,
  FETCH_SIGNUP_SUCCESS,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  CHECK_IS_LOGGED_REQUEST,
  CHECK_IS_LOGGED_SUCCESS,
  FETCH_FAILURE,
  CLEAR_FETCH_FAILURE_ERROR
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
 * @description create action for check is logged request
 * @return {Object} action
 */
const checkIsLoggedRequest = () => ({
  type: CHECK_IS_LOGGED_REQUEST
});

/**
 * @description create action for check is logged success
 * @param {Object} data user data
 * @return {Object} action
 */
const checkIsLoggedSuccess = (data) => ({
  type: CHECK_IS_LOGGED_SUCCESS,
  payload: data
});

/**
 * @description action creator fetch  failure
 * @param {String} err error message
 * @return {Object} action
 */
const fetchFailure = (err) => ({
  type: FETCH_FAILURE,
  payload: {
    errorFetching: err
  }
});

const cleanFetchError = ()=>({
  type:CLEAR_FETCH_FAILURE_ERROR
});

export {
  fetchSignUp,
  fetchSignUpSuccess,
  fetchLoginRequest,
  fetchLoginSuccess,
  checkIsLoggedRequest,
  checkIsLoggedSuccess,
  fetchFailure,
  cleanFetchError
};

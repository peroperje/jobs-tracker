import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
  ADD_JOB_REQUEST,
  ADD_JOB_REQUEST_SUCCESS,
  ADD_JOB_REQUEST_FAILURE,
  UPDATE_JOB_REQUEST,
  UPDATE_JOB_REQUEST_SUCCESS,
  UPDATE_JOB_REQUEST_FAILURE,
  DELETE_JOB_REQUEST,
  SET_VISIBILITY_FILTER,
  CLEAR_JOBS_STATE
} from './jobs.constant';

/**
 * @description create the action for jobs fetch request
 * @function fetchJobsRequest
 * @return {Object} the action
 */
const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST
});

/**
 * @description Create the action for successful fetched jobs
 * @function fetchJobsSuccess
 * @param {Array} data The list of objects
 * @return {Object} the action
 */
const fetchJobsSuccess = (data) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: data
});

/**
 * @description Create the action for failed jobs fetch
 * @function fetchJobsFailure
 * @param {String} e error message
 * @return {Object} the action
 */
const fetchJobsFailure = (e) => ({
  type: FETCH_JOBS_FAILURE,
  payload: {
    errorFetching: e
  }
});

/**
 * @description create the action for fetch add job request
 * @function addJobRequest
 * @param {Object} data new job data
 * @return {Object} the action
 */
const addJobRequest = (data) => ({
  type: ADD_JOB_REQUEST,
  payload: data
});

/**
 * @description Create the action for fetch add job success
 * @function addJobRequestSuccess
 * @param {Object} data new job data object
 * @return {Object} action object
 */
const addJobRequestSuccess = (data) => ({
  type: ADD_JOB_REQUEST_SUCCESS,
  payload: data
});

/**
 * @description Create the action for fetch add job failure
 * @param {String} e error message
 * @return {Object} the action object
 */
const addJobRequestFailure = (e) => ({
  type: ADD_JOB_REQUEST_FAILURE,
  payload: {
    errorFetching: e
  }
});

/**
 * @description Update Job with provided ID
 * @function updateJobRequest
 * @param {Number} _id Job ID
 * @param {Object} data Object with job properties for update
 * @return {Object} the update redux action
 */
const updateJobRequest = (_id, data) => ({
  type: UPDATE_JOB_REQUEST,
  payload: {
    _id,
    data
  }
});

/**
 * @description create action for update job request success
 * @param {String} _id id of job
 * @param {Object} data updated job data
 * @return {Object} action
 */
const updateJobRequestSuccess = (_id, data) => ({
  type: UPDATE_JOB_REQUEST_SUCCESS,
  payload: {
    _id,
    data
  }
});

/**
 * @description create action for update job request failure
 * @param {String} errorFetching An error message
 * @return {Object} the action object
 */
const updateJobRequestFailure = (errorFetching) => ({
  type: UPDATE_JOB_REQUEST_FAILURE,
  payload: {
    errorFetching
  }
});

/**
 * @description Delete job by id
 * @function deleteJob
 * @param {Number} id Job ID
 * @return {Object} the redux action
 */
const deleteJob = (id) => ({
  type: DELETE_JOB_REQUEST,
  payload: {
    _id: id
  }
});

/**
 * @description Set visibility filter for jobs
 * @function setVisibilityFilter
 * @param {Boolean} filter This will be use to check is job active or not
 * @return {Object} redux action
 */
const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  payload: {
    jobsVisibilityFilter: filter
  }
});

/**
 * @description Create action for clean jobs state
 * @return {Object} the action
 */
const cleanJobsState = () => ({
  type: CLEAR_JOBS_STATE
});

export {
  fetchJobsRequest,
  fetchJobsSuccess,
  fetchJobsFailure,
  addJobRequest,
  addJobRequestSuccess,
  addJobRequestFailure,
  updateJobRequest,
  updateJobRequestSuccess,
  updateJobRequestFailure,
  deleteJob,
  setVisibilityFilter,
  cleanJobsState
};

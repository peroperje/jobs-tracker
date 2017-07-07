import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
  FETCH_ADD_JOB_REQUEST,
  FETCH_ADD_JOB_SUCCESS,
  FETCH_ADD_JOB_FAILURE,
  UPDATE_JOB,
  CHANGE_STATUS,
  DELETE_JOB,
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
 * @function fetchAddJobRequest
 * @param {Object} data new job data
 * @return {Object} the action
 */
const fetchAddJobRequest = (data) => ({
  type: FETCH_ADD_JOB_REQUEST,
  payload: data
});

/**
 * @description Create the action for fetch add job success
 * @function fetchAddJobSuccess
 * @param {Object} data new job data object
 * @return {Object} action object
 */
const fetchAddJobSuccess = (data) => ({
  type: FETCH_ADD_JOB_SUCCESS,
  payload: data
});

/**
 * @description Create the action for fetch add job failure
 * @param {String} e error message
 * @return {Object} the action object
 */
const fetchAddJobFailure = (e) => ({
  type: FETCH_ADD_JOB_FAILURE,
  payload: {
    errorFetching: e
  }
});


/**
 * @description Add Job action
 * @function addJob
 * @param {Object} job The job object
 * @return {Object} return "redux" action
 */
const addJob = (job) => ({
  type: FETCH_ADD_JOB_SUCCESS,
  payload: job
});

/**
 * @description Update Job with provided ID
 * @function updateJob
 * @param {Number} id Job ID
 * @param {Object} job Object with job properties for update
 * @return {Object} the update redux action
 */
const updateJob = (id, job) => ({
  type: UPDATE_JOB,
  payload: {
    _id: id,
    data: job
  }
});

/**
 * @description Create the action for change a job status
 * @function changeStatus
 * @param {String} id id of job
 * @return {Object} the action for change a job status
 */
const changeStatus = (id) => ({
  type: CHANGE_STATUS,
  payload: {
    _id: id
  }
});

/**
 * @description Delete job by id
 * @function deleteJob
 * @param {Number} id Job ID
 * @return {Object} the redux action
 */
const deleteJob = (id) => ({
  type: DELETE_JOB,
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
  fetchAddJobRequest,
  fetchAddJobSuccess,
  fetchAddJobFailure,
  addJob,
  updateJob,
  changeStatus,
  deleteJob,
  setVisibilityFilter,
  cleanJobsState
};

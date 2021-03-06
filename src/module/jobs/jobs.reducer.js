/**
 * @namespace jobslist
 */

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
  DELETE_JOB_REQUEST_SUCCESS,
  DELETE_JOB_REQUEST_FAILURE,
  SET_VISIBILITY_FILTER,
  jobsFilter,
  CLEAR_JOBS_STATE
} from './jobs.constant';

/**
 * @private
 * @description Job reducer
 * @param {Object} job Job object
 * @param {Object} action Action
 * @return {Object} New job object
 */
function job(job = {}, action) {
  const {type, payload} = action;
  switch (type) {
    case ADD_JOB_REQUEST_SUCCESS:
      return payload;
    case UPDATE_JOB_REQUEST_SUCCESS:
      if (payload._id === job._id) {
        return Object.assign({}, job, payload.data);
      }
      return job;
    case DELETE_JOB_REQUEST_SUCCESS:
      return payload._id !== job._id;
    default:
      return job;
  }
}

/**
 * @description jobItems reducer
 * @param {Array} state jobs.items - list of job objects
 * @param {Object} action an action
 * @return {Array } the slice of state
 */
function jobItems(state = [], action) {
  const {type} = action;
  switch (type) {
    case FETCH_JOBS_SUCCESS:
      return [...state, ...action.payload];
    case ADD_JOB_REQUEST_SUCCESS:
      return [...state, job({}, action)];
    case UPDATE_JOB_REQUEST_SUCCESS:
      return state.map(jobItem => job(jobItem, action));
    case DELETE_JOB_REQUEST_SUCCESS:
      return state.filter(jobItem => job(jobItem, action));
    default:
      return state;
  }
}

/**
 * @description Jobs reducer
 * @memberOf jobslist
 * @function action
 * @param {Object} state  Jobs object
 * @param {Object} action Action object
 * @return {Array} New store
 */
function jobs(state = {}, action) {
  const {type} = action;
  switch (type) {

    case UPDATE_JOB_REQUEST:
    case DELETE_JOB_REQUEST:
    case FETCH_JOBS_REQUEST:
    case ADD_JOB_REQUEST:
      return {...state, ...{isFetching: true, errorFetching: null}};
    case UPDATE_JOB_REQUEST_SUCCESS:
    case DELETE_JOB_REQUEST_SUCCESS:
    case FETCH_JOBS_SUCCESS:
    case ADD_JOB_REQUEST_SUCCESS:
      return {
        ...state,
        ...{
          items: jobItems(state.items, action),
          isFetching: false,
          errorFetching: null
        }
      };
    case UPDATE_JOB_REQUEST_FAILURE:
    case DELETE_JOB_REQUEST_FAILURE:
    case FETCH_JOBS_FAILURE:
    case ADD_JOB_REQUEST_FAILURE:
      return {
        ...state,
        ...{
          isFetching: false,
          errorFetching: action.payload.errorFetching
        }
      };
    case CLEAR_JOBS_STATE:
      return {...state, ...{items: []}};
    default:
      return state;
  }
}

/**
 * @description Reducer for Visible filter.
 * @memberOf jobslist
 * @param {String} state redux state
 * @param {Object} action redux action
 * @return {string}
 */
function jobsVisibilityFilter(state = jobsFilter.SHOW_ALL, action) {
  const {type, payload} = action;
  switch (type) {
    case SET_VISIBILITY_FILTER :
      return payload.jobsVisibilityFilter;
    default :
      return state;
  }
}

export {jobs, jobsVisibilityFilter};

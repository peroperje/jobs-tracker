/**
 * @namespace jobslist
 */

import {
  ADD_JOB,
  UPDATE_JOB,
  CHANGE_STATUS,
  DELETE_JOB,
  SET_VISIBILITY_FILTER,
  jobsFilter
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
    case ADD_JOB:
      return payload;
    case UPDATE_JOB:
      if (payload._id === job._id) {
        // added {_id:payload._id} to avoid overwrite _id by payload
        return Object.assign({}, job, payload.data, {id: payload._id});
      }
      return job;
    case DELETE_JOB:
      return payload._id !== job._id;
    case CHANGE_STATUS:
      if (job._id === payload._id) {
        return {...job, active: !job.active};
      }
      return job;
    default:
      return job;
  }
}
function jobItem(state = [], action) {
  const {type} = action;
  switch (type) {
    case ADD_JOB:
      return [...state, job({}, action)];
    case UPDATE_JOB:
      return state.map(jobItem => job(jobItem, action));
    case CHANGE_STATUS:
      return state.map(jobItem => job(jobItem, action));
    case DELETE_JOB:
      return state.filter(jobItem => job(jobItem, action));
    default:
      return state;
  }
}

/**
 * @description Jobs reducer
 * @memberOf jobslist
 * @function action
 * @param {Array} state  Array of action objects
 * @param {Object} action Action object
 * @return {Array} New store
 */
function jobs(state = {}, action) {
  const {type} = action;
  switch (type) {
    case ADD_JOB:
    case UPDATE_JOB:
    case CHANGE_STATUS:
    case DELETE_JOB:
      return {...state,...{items: jobItem(state.items,action)}};
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

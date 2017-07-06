/**
 * @namespace jobslist
 */

import {ADD_JOB, UPDATE_JOB, CHANGE_STATUS, DELETE_JOB, SET_VISIBILITY_FILTER} from './jobs.constant';

/**
 * @description Add Job action
 * @memberOf jobslist
 * @function addJob
 * @param {Object} job The job object
 * @return {Object} return "redux" action
 */
const addJob = (job) => ({
  type: ADD_JOB,
  payload: job
});

/**
 * @description Update Job with provided ID
 * @memberOf jobslist
 * @function updateJob
 * @param {Number} id Job ID
 * @param {Object} data Object with job properties for update
 * @return {Object} the update redux action
 */
const updateJob = (id, job) => ({
  type: UPDATE_JOB,
  payload: {
    _id: id,
    data: job
  }
});

const changeStatus = (id) => ({
  type: CHANGE_STATUS,
  payload: {
    _id: id
  }
});

/**
 * @description Delete job by id
 * @memberOf jobslist
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
 * @memberOf jobslist
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

export {
  addJob,
  updateJob,
  changeStatus,
  deleteJob,
  setVisibilityFilter
};

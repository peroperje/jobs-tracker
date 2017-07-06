/**
 * @namespace jobslist
 */

import {ADD_JOB, UPDATE_JOB, CHANGE_STATUS, DELETE_JOB, SET_VISIBILITY_FILTER} from './jobs.constant';

/**
 * @private
 * @description Object with private methods
 * @memberOf jobslist
 * @name privateMethods
 * @type {Object}
 */
const privateMethods = {};

/**
 * @description Add job action creator
 * @memberOf jobslist.privateMethods
 * @function addJob
 * @param {Object} job Job object data
 * @return {Object} Return "redux" action
 */
privateMethods.addJob = (job) => ({
  type: ADD_JOB,
  payload: job
});

/**
 * @description Update job
 * @memberOf jobslist.privateMethods
 * @function updateJob
 * @param {Number} id  Job ID
 * @param {Object} job  Job data
 *
 * @return {Object} The "redux" action
 */
privateMethods.updateJob = (id, job) => ({
  type: UPDATE_JOB,
  payload: {
    _id: id,
    data: job
  }
});

/**
 * @description Change status of job
 * @memberOf jobslist.privateMethods
 * @function changeStatus
 * @param {Number} id Job ID
 * @return {Object} Action object
 */
privateMethods.changeStatus = (id) => ({
  type: CHANGE_STATUS,
  payload: {
    _id: id
  }
});

/**
 * @description Delete Job
 * @memberOf jobslist.privateMethods
 * @function deleteJob
 * @param {Number} id Job id
 * @return {Object}
 */
privateMethods.deleteJob = (id) => ({
  type: DELETE_JOB,
  payload: {
    _id: id
  }
});

/**
 * @description Change visibility filter
 * @memberOf jobslist.privateMethods
 * @param {String} filter Visibility value
 * @return {Object} Action object
 */
privateMethods.setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  payload: {
    jobsVisibilityFilter: filter
  }
});

/**
 * @description Add Job action
 * @memberOf jobslist
 * @function addJob
 * @param {Object} job The job object
 * @return {Object} return "redux" action
 */
const addJob = (job) => privateMethods.addJob(job);

/**
 * @description Update Job with provided ID
 * @memberOf jobslist
 * @function updateJob
 * @param {Number} id Job ID
 * @param {Object} data Object with job properties for update
 * @return {Object} the update redux action
 */
const updateJob = (id, data) => privateMethods.updateJob(id, data);

const changeStatus = (id) => privateMethods.changeStatus(id);

/**
 * @description Delete job by id
 * @memberOf jobslist
 * @function deleteJob
 * @param {Number} id Job ID
 * @return {Object} the redux action
 */
const deleteJob = (id) => privateMethods.deleteJob(id);

/**
 * @description Set visibility filter for jobs
 * @memberOf jobslist
 * @function setVisibilityFilter
 * @param {Boolean} filter This will be use to check is job active or not
 * @return {Object} redux action
 */
const setVisibilityFilter = (filter) => privateMethods.setVisibilityFilter(filter);

export {
  addJob,
  updateJob,
  changeStatus,
  deleteJob,
  setVisibilityFilter
};

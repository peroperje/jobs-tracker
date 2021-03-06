/**
 * @description const for fetch jobs request
 * @const {string}
 * @default
 */
const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';

/**
 * @description const for fetch jobs success
 * @const {string}
 * @default
 */
const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';

/**
 * @description const for fetch job failure
 * @const {string}
 * @default
 */
const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';

/**
 * @description const for fetch add job request
 * @const {string}
 * @default
 */
const ADD_JOB_REQUEST = 'ADD_JOB_REQUEST';

/**
 * @description Add job constant
 * @memberOf jobslist
 * @const {string}
 * @default
 */
const ADD_JOB_REQUEST_SUCCESS = 'ADD_JOB_REQUEST_SUCCESS';

/**
 * @description const for fetch add job failure
 * @const {string}
 * @default
 */
const ADD_JOB_REQUEST_FAILURE = 'ADD_JOB_REQUEST_FAILURE';

/**
 * @description Update job constant
 * @const {string}
 * @default
 */
const UPDATE_JOB_REQUEST = 'UPDATE_JOB_REQUEST';

/**
 * @description const for update job success
 * @const {string}
 * @default
 */
const UPDATE_JOB_REQUEST_SUCCESS = 'UPDATE_JOB_REQUEST_SUCCESS';

/**
 * @description const for update job failure
 * @const {string}
 * @default
 */
const UPDATE_JOB_REQUEST_FAILURE = 'UPDATE_JOB_REQUEST_FAILURE';

/**
 * @description Delete job constant
 * @const {string}
 * @default
 */
const DELETE_JOB_REQUEST = 'DELETE_JOB_REQUEST';

/**
 *@description The const for delete job request success
 * @const {string}
 * @default
 */
const DELETE_JOB_REQUEST_SUCCESS = 'DELETE_JOB_REQUEST_SUCCESS';

/**
 * @description The const for delete job request failure
 * @const {string}
 * @default
 */
const DELETE_JOB_REQUEST_FAILURE = 'DELETE_JOB_REQUEST_FAILURE';

/**
 * @description Set visibility filter action constant
 * @memberOf jobslist
 * @const {string}
 * @default
 */
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * @description Visibility filter constants
 * @memberOf jobslist
 * @type {{SHOW_ALL: string, SHOW_ACTIVE: string, SHOW_ARHIVED: string}}
 * @default
 */
const jobsFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_ARHIVED: 'SHOW_ARHIVED'
};

/**
 * @description clear all jobs items
 * @const {string}
 * @default
 */
const CLEAR_JOBS_STATE = 'CLEAR_JOBS_STATE';

export {
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
};

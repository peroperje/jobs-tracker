import {takeEvery, call, put, take} from 'redux-saga/effects';

import {FETCH_JOBS_REQUEST, ADD_JOB_REQUEST, UPDATE_JOB_REQUEST} from './jobs.constant';
import {
  fetchJobsSuccess,
  fetchJobsFailure,
  addJobRequestSuccess,
  addJobRequestFailure,
  updateJobRequestSuccess,
  updateJobRequestFailure
} from './jobs.action';
import {getJobs, addJob, updateJob} from './jobs.service';

/**
 * @description Fetch jobs data
 */
export function* jobsRequest() {

  const {response, error} = yield call(getJobs);

  if (response) {
    yield put(fetchJobsSuccess(response.data));
  } else {
    yield put(fetchJobsFailure(error.data));
  }

}

/**
 * @description add job worker
 * @param {Object} action object
 */
export function* addJobRequest(action) {
  const {response, error} = yield call(addJob, action.payload);
  if (response) {
    yield put(addJobRequestSuccess(response.data));
  } else {
    yield put(addJobRequestFailure(error.data));
  }
}

/**
 * @description update job worker
 * @param {Object} action action object
 */
export function* updateJobRequest(action) {
  const {_id, data} = action.payload;
  const {response, error} = yield call(updateJob, _id, data);
  if (response) {
    const {_id, ...data} = response.data;
    yield put(updateJobRequestSuccess(_id, data));
  } else {
    yield put(updateJobRequestFailure(error.data));
  }
}

/**
 * @description saga watcher for jobs action
 */
export function* watchJobs() {

  yield takeEvery(FETCH_JOBS_REQUEST, jobsRequest);
  yield takeEvery(ADD_JOB_REQUEST, addJobRequest);
  yield takeEvery(UPDATE_JOB_REQUEST, updateJobRequest);

}

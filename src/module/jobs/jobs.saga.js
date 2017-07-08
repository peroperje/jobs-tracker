import {takeEvery, call, put, take} from 'redux-saga/effects';

import {FETCH_JOBS_REQUEST, ADD_JOB_REQUEST} from './jobs.constant';
import {
  fetchJobsSuccess,
  fetchJobsFailure,
  fetchAddJobSuccess,
  fetchAddJobFailure
} from './jobs.action';
import {getJobs, addJob} from './jobs.service';

/**
 * @description Fect jobs data
 */
export function* jobRequest() {

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
    yield put(fetchAddJobSuccess(response.data));
  } else {
    yield put(fetchAddJobFailure(error.data));
  }
}

/**
 * @description saga watcher for jobs action
 */
export function* watchJobs() {

   yield takeEvery(FETCH_JOBS_REQUEST, jobRequest);
   yield takeEvery(ADD_JOB_REQUEST, addJobRequest);

}

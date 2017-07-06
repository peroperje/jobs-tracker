import {takeEvery, call, put} from 'redux-saga/effects';

import {FETCH_JOBS_REQUEST} from './jobs.constant';
import {fetchJobsSuccess, fetchJobsFailure} from './jobs.action';
import {getJobs} from './jobs.service';

/**
 * @description Fect jobs data
 */
export function* jobRequest() {

  const {response, error} = yield call(getJobs);

  if (response) {
    yield put(fetchJobsSuccess(response.data.jobs));
  } else {
    yield put(fetchJobsFailure(error.data));
  }

}

/**
 * @description saga watcher for jobs action
 */
export function* watchJobs() {
  yield takeEvery(FETCH_JOBS_REQUEST, jobRequest);
}

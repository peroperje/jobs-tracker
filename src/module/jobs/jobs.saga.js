import {takeEvery} from 'redux-saga/effects';

import {FETCH_JOBS_REQUEST} from './jobs.constant';

/**
 * @description Fect jobs data
 */
export function* jobRequest() {

}

export function* watchJobs() {
  yield takeEvery(FETCH_JOBS_REQUEST, jobRequest);
}

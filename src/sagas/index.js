import {all, fork} from 'redux-saga/effects';

import {watchUser} from '../module/users/users.saga';
import {watchJobs} from '../module/jobs/jobs.saga';

function* rootSaga() {
  yield all([
    fork(watchUser),
    fork(watchJobs)
  ]);
}

export default rootSaga;

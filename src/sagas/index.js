import {fork} from 'redux-saga/effects';

import {watchUser} from '../module/users/users.saga';
import {watchJobs} from '../module/jobs/jobs.saga';

function* rootSaga() {
    yield fork(watchUser);
    yield fork(watchJobs);
}

export default rootSaga;

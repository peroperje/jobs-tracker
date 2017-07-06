import {all, fork} from 'redux-saga/effects';

import {watchUser} from '../module/users/users.saga';

function* rootSaga() {
  yield all([
    fork(watchUser)
  ]);
}

export default rootSaga;
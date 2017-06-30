import {all, fork} from 'redux-saga/effects';

import {watchSignUp} from '../module/users/users.saga';

function* rootSaga() {
  yield all([
    fork(watchSignUp)
  ]);
}

export default rootSaga;
import {takeLatest, put, call} from 'redux-saga/effects';

import {signup} from './users.service';
import {fetchSignUpSuccess, fetchFailure} from './users.action';
import {FETCH_SIGNUP_REQUEST} from './users.constant';

/**
 * @description worker for Signup action
 * @param {Object} action Action object
 */
export function* signUp(action) {
  try {
    const userData = yield call(signup, action.payload.data);
    yield put(fetchSignUpSuccess(userData));
  } catch (e) {
    yield put(fetchFailure(e.message));
  }
}

/**
 * @description watcher for SignUp action
 */
export function* watchSignUp() {
  yield takeLatest(FETCH_SIGNUP_REQUEST, signUp);
}


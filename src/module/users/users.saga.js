import {takeLatest, put, call} from 'redux-saga/effects';

import {signup, login} from './users.service';
import {fetchSignUpSuccess, fetchLoginSuccess, fetchFailure} from './users.action';
import {FETCH_SIGNUP_REQUEST, FETCH_LOGIN_REQUEST} from './users.constant';

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
 * @description worker for Login action
 * @param {Object} action FETCH_LOGIN_REQUEST action
 */
export function* logIn(action) {
  try {
    const userData = yield call(login, action.payload);
    yield put(fetchLoginSuccess(userData));
  } catch (e) {
    yield put(fetchFailure(e.message));
  }
}

/**
 * @description watcher for SignUp action
 */
export function* watchSignUp() {
  yield takeLatest(FETCH_SIGNUP_REQUEST, signUp);
  yield takeLatest(FETCH_LOGIN_REQUEST, logIn);
}


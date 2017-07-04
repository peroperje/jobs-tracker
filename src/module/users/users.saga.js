import {delay} from 'redux-saga';
import {takeLatest, put, call} from 'redux-saga/effects';

import {signup, login, me} from './users.service';
import {
  fetchSignUpSuccess,
  fetchLoginSuccess,
  checkIsLoggedSuccess,
  fetchFailure,
  cleanFetchError
} from './users.action';
import {
  FETCH_SIGNUP_REQUEST,
  FETCH_LOGIN_REQUEST,
  CHECK_IS_LOGGED_REQUEST
} from './users.constant';

/**
 * @description worker for Signup action
 * @param {Object} action Action object
 */
export function* signUp(action) {
  try {
    const res = yield call(signup, action.payload.data);
    yield put(fetchSignUpSuccess(res.data));
  } catch (e) {
    const errorMesssage = e.data || 'Server error';
    yield put(fetchFailure(errorMesssage));
    yield call(delay,4000);
    yield put(cleanFetchError());
  }
}

/**
 * @description worker for Login action
 * @param {Object} action FETCH_LOGIN_REQUEST action
 */
export function* logIn(action) {
  try {
    const res = yield call(login, action.payload);
    yield put(fetchLoginSuccess(res.data));
  } catch (e) {
    const errorMesssage = e.data || 'Server error';
    yield put(fetchFailure(errorMesssage));
    yield call(delay,4000);
    yield put(cleanFetchError());
  }
}

/**
 * @description saga worker for me() request
 */
export function* isLogged() {
  try {
    const res = yield call(me);
    yield put(checkIsLoggedSuccess(res.data));
  } catch (e) {

    yield put(fetchFailure('Server Error'));
    yield call(delay,4000);
    yield put(cleanFetchError());
  }
}

/**
 * @description watcher for SignUp action
 */
export function* watchSignUp() {
  yield takeLatest(FETCH_SIGNUP_REQUEST, signUp);
  yield takeLatest(FETCH_LOGIN_REQUEST, logIn);
  yield takeLatest(CHECK_IS_LOGGED_REQUEST, isLogged);
}


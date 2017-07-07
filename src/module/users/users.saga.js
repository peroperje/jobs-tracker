import {delay} from 'redux-saga';
import {takeLatest, put, call} from 'redux-saga/effects';

// service
import {signup, login, me} from './users.service';

// action
import {
  fetchSignUpSuccess,
  fetchLoginSuccess,
  checkIsLoggedSuccess,
  fetchFailure,
  cleanFetchError
} from './users.action';
import {cleanJobsState} from '../jobs/jobs.action';

// constants
import {
  FETCH_SIGNUP_REQUEST,
  FETCH_LOGIN_REQUEST,
  CHECK_IS_LOGGED_REQUEST,
  LOGOUT
} from './users.constant';

// local storage manager
import jwtStorage from '../../store/jwtStorage';

/**
 * @description worker for Signup action
 * @param {Object} action Action object
 */
export function* signUp(action) {
  const {response, error} = yield call(signup, action.payload.data);
  if (response) {
    jwtStorage.setJWT(response.headers['x-auth']);
    yield put(fetchSignUpSuccess(response.data));
  } else {
    const errorMesssage = error.data || 'Server error';
    yield put(fetchFailure(errorMesssage));
    yield call(delay, 4000);
    yield put(cleanFetchError());
  }
}

/**
 * @description worker for Login action
 * @param {Object} action FETCH_LOGIN_REQUEST action
 */
export function* logIn(action) {

  const {response, error} = yield call(login, action.payload);
  if (response) {

    yield call(jwtStorage.setJWT, response.headers['x-auth']);
    yield put(fetchLoginSuccess(response.data));

  } else {

    const errorMesssage = typeof error.data !== 'undefined' ? error.data : 'Server error';
    yield put(fetchFailure(errorMesssage));
    yield call(delay, 4000);
    yield put(cleanFetchError());

  }
}

/**
 * @description saga worker for me() request
 */
export function* isLogged() {
  const {response, error} = yield call(me);
  if (response) {

    yield put(checkIsLoggedSuccess(response.data));

  } else {

    const errorMesssage = typeof error.data !== 'undefined' ? error.data : 'Server error';
    yield put(fetchFailure(errorMesssage));
    yield call(delay, 4000);
    yield put(cleanFetchError());

  }
}

/**
 * @description worker for logout
 */
export function* logout() {
  yield call(jwtStorage.removeJWT);
  yield put(cleanJobsState());
}

/**
 * @description watcher for user action
 */
export function* watchUser() {
  yield takeLatest(FETCH_SIGNUP_REQUEST, signUp);
  yield takeLatest(FETCH_LOGIN_REQUEST, logIn);
  yield takeLatest(CHECK_IS_LOGGED_REQUEST, isLogged);
  yield takeLatest(LOGOUT, logout);
}


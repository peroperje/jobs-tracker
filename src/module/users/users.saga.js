import {takeLatest,put,call} from 'redux-saga/effects';

import {signup} from './users.service';
import {fetchSignUpSuccess,fetchSignUpFailure} from './users.action';
import {FETCH_SIGNUP_REQUSET} from './users.constant';

export function* signUp(action) {
  try {
    const userData = yield call(signup, action.payload.data);
    yield put(fetchSignUpSuccess(userData));
  } catch (e) {
    yield put(fetchSignUpFailure(e.message));
  }
}

export function* watchSignUp() {
  yield takeLatest(FETCH_SIGNUP_REQUSET,signUp);
}


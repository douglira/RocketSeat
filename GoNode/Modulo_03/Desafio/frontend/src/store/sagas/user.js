import { takeLatest, call, put } from 'redux-saga/effects';
import { api } from 'services/api';

import { Types as UserTypes, Creators as UserActions } from 'store/ducks/user';

function* checkAuthorization() {
  try {
    yield call(api.get, '/check_authentication');

    yield put(UserActions.authStatus(true));
  } catch (err) {
    // console.log(err.response);
    yield put(UserActions.authStatus(false));
  }
}

export default function* root() {
  yield takeLatest(UserTypes.CHECK_AUTH, checkAuthorization);
}

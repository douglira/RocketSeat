import { takeLatest, call, put } from 'redux-saga/effects';
import { api } from 'services/api';

import { Types as UserTypes, Creators as UserActions } from 'store/ducks/user';

function* authentication(action) {
  try {
    if (action && action.payload) {
      const response = yield call(api.post, '/signin', action.payload.credentials);

      yield put(UserActions.authorized(response.data.user));
    } else {
      const response = yield call(api.get, '/check_authentication');

      yield put(UserActions.authorized(response.data.user));
    }
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put(UserActions.unauthorized(err.response.data.error));
      return;
    }

    yield put(UserActions.unauthorized('Unexpected error. Try again later'));
  }
}

export default function* root() {
  yield takeLatest(UserTypes.CHECK_AUTH, authentication);
  yield takeLatest(UserTypes.SIGNIN_REQUEST, authentication);
}

import { takeLatest, call, put } from 'redux-saga/effects';
import { api } from 'services/api';
import jwtDecode from 'jwt-decode';

import { Types as UserTypes, Creators as UserActions } from 'store/ducks/user';
import { Creators as NotificationActions } from 'store/ducks/notification';

function* authentication(action) {
  try {
    const { data } = yield call(api.post, '/signin', action.payload.credentials);

    localStorage.setItem('access_token', data.token);

    yield put(UserActions.authorized(data.user));
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put(UserActions.unauthorized(err.response.data.error));
      yield put(NotificationActions.pushNotification(err.response.data.error));
      return;
    }

    yield put(NotificationActions.pushNotification('Unexpected error. Try again later'));
  }
}

function* verify() {
  const token = localStorage.getItem('access_token');
  if (token) {
    try {
      const decoded = jwtDecode(token);
      yield put(UserActions.authorized(decoded.user));
    } catch (err) {
      localStorage.removeItem('access_token');
      yield put(UserActions.unauthorized('User not authorized'));
      yield put(NotificationActions.pushNotification('User not authorized'));
    }
  } else {
    localStorage.removeItem('access_token');
    yield put(UserActions.unauthorized('User not authorized'));
  }
}

function* signout(action) {
  localStorage.removeItem('access_token');

  yield put(UserActions.signoutReset());

  yield call(action.payload.redirect);
}

export default function* root() {
  yield takeLatest(UserTypes.CHECK_AUTH, verify);
  yield takeLatest(UserTypes.SIGNIN_REQUEST, authentication);
  yield put(UserActions.checkAuth());
  yield takeLatest(UserTypes.SIGNOUT_REQUEST, signout);
}

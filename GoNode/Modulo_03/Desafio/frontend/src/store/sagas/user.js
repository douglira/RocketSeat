import { takeLatest, call, put } from 'redux-saga/effects';
import { api } from 'services/api';

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
      yield put(NotificationActions.pushNotification({ text: err.response.data.error, topic: 'error' }));
      return;
    }

    yield put(NotificationActions.pushNotification({
      text: 'Unexpected error. Try again later',
      topic: 'error',
    }));
  }
}

function* update(action) {
  try {
    const { data } = yield call(api.put, '/user/profile', action.payload.user);

    put(UserActions.updateProfileSuccess(data));
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put(UserActions.editProfileFailure(err.response.data.error));
      yield put(NotificationActions.pushNotification({ text: err.response.data.error, topic: 'error' }));
      return;
    }

    yield put(NotificationActions.pushNotification({
      text: 'Unexpected error. Try again later',
      topic: 'error',
    }));
  }
}

function* changePassword(action) {
  try {
    const { data } = yield call(api.put, '/user/password', action.payload.data);

    yield put(NotificationActions.pushNotification({ text: data.message, topic: 'success' }));
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put(UserActions.changePassFailure(err.response.data.error));
      yield put(NotificationActions.pushNotification({ text: err.response.data.error, topic: 'error' }));
      return;
    }

    yield put(NotificationActions.pushNotification({
      text: 'Unexpected error. Try again later',
      topic: 'error',
    }));
  }
}

function* getInfo(action) {
  try {
    const { data } = yield call(api.get, `/user/profile/${action.payload.id}`);

    yield put(UserActions.profileSuccess(data));
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put(UserActions.profileFailure(err.response.data.error));
      yield put(NotificationActions.pushNotification({ text: err.response.data.error, topic: 'error' }));
      return;
    }

    yield put(NotificationActions.pushNotification({
      text: 'Unexpected error. Try again later',
      topic: 'error',
    }));
  }
}

function* verify() {
  const token = localStorage.getItem('access_token');
  if (token) {
    try {
      const { data } = yield call(api.get, 'user/me');
      yield put(UserActions.authorized(data));
    } catch (err) {
      localStorage.removeItem('access_token');
      yield put(UserActions.unauthorized('User not authorized'));
      yield put(NotificationActions.pushNotification({ text: 'User not authorized', topic: 'error' }));
    }
  } else {
    localStorage.removeItem('access_token');
    yield put(UserActions.unauthorized('User not authorized'));
  }
}

function* realtimeEdit() {
  try {
    const { data: user } = yield call(api.get, '/user/me');

    yield put(UserActions.realtimeEditUserSuccess(user));
  } catch (err) {
    console.log(err);
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
  yield takeLatest(UserTypes.UPDATE_PROFILE_REQUEST, update);
  yield takeLatest(UserTypes.CHANGE_PASS_REQUEST, changePassword);
  yield takeLatest(UserTypes.USER_PROFILE_REQUEST, getInfo);
  yield takeLatest(UserTypes.REALTIME_EDIT_REQUEST, realtimeEdit);

  yield put(UserActions.checkAuth());
  yield takeLatest(UserTypes.SIGNOUT_REQUEST, signout);
}

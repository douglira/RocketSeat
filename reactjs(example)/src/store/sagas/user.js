import { takeLatest, call, put } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import api from '~/services/api';

import { Types as UserTypes, Creators as UserActions } from '~/store/ducks/user';
import { Types as ToastifyTypes, buildToastify } from '~/store/ducks/toastify';

function* verifyAuth() {
  try {
    const token = Cookies.get('SS_TOKEN');

    if (token) {
      const { data } = yield call(api.get, '/users/me');

      yield put(UserActions.signinSuccess(data.user));
    } else {
      yield put(UserActions.signout());
    }
  } catch (err) {
    yield put(UserActions.signout(false));
  }
}

function* signin(action) {
  try {
    const { data } = yield call(api.post, '/auth/signin', action.credentials);

    Cookies.set('SS_TOKEN', data.token);

    yield put(UserActions.signinSuccess(data.user));
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put({
        ...UserActions.signinFailure(err.response.data.error),
        toast: buildToastify(err.response.data.error, ToastifyTypes.ERROR),
      });
    }
  }
}

function* signup(action) {
  try {
    yield call(api.post, '/auth/signup', action.data);

    action.cbNavigation();

    yield put(UserActions.signupSuccess());
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put({
        ...UserActions.signupFailure(err.response.data.error),
        toast: buildToastify(err.response.data.error, ToastifyTypes.ERROR),
      });
    }
  }
}

function* forgotPassRequest(action) {
  try {
    const { email } = action;
    const formPathname = '/redefine/form/reset_pass';
    const { data } = yield call(api.post, '/auth/forgot_password', { email, formPathname });

    yield put({
      ...UserActions.forgotPassResponse(),
      toast: buildToastify(data.message, ToastifyTypes.SUCCESS),
    });

    action.cbNavigation();
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put({
        ...UserActions.forgotPassResponse(),
        toast: buildToastify(err.response.data.error, ToastifyTypes.ERROR),
      });
    }
  }
}

function* resetPassRequest(action) {
  try {
    const { data } = action;
    const { data: response } = yield call(api.post, '/auth/reset_password', data);

    yield put({
      ...UserActions.forgotPassResponse(),
      toast: buildToastify(response.message, ToastifyTypes.SUCCESS),
    });

    action.cbNavigation();
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put({
        ...UserActions.forgotPassResponse(),
        toast: buildToastify(err.response.data.error, ToastifyTypes.ERROR),
      });
    }
  }
}

export default function* root() {
  yield takeLatest(UserTypes.VERIFY_AUTH, verifyAuth);
  yield takeLatest(UserTypes.SIGNIN_REQUEST, signin);
  yield takeLatest(UserTypes.SIGNUP_REQUEST, signup);

  yield takeLatest(UserTypes.FORGOT_PASS_REQUEST, forgotPassRequest);
  yield takeLatest(UserTypes.RESET_PASS_REQUEST, resetPassRequest);

  yield put(UserActions.verifyAuth());
}

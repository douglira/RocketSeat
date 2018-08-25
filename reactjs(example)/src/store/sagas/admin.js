import { takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { Types as AdminTypes, Creators as AdminActions } from '~/store/ducks/admin';

function* fetchUsers(action) {
  try {
    const { page, perPage } = action;
    const { data } = yield call(api.get, '/admin/users', { params: { page, perPage } });
    yield put(AdminActions.allUsersSuccess(data));
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put(AdminActions.allUsersFailure(err.response.data.error));
    }
  }
}

export default function* root() {
  yield takeLatest(AdminTypes.ALL_USERS_REQUEST, fetchUsers);
}

import { takeLatest, call, put } from 'redux-saga/effects';
import { api } from 'services/api';

import { Types as UsersTypes, Creators as UsersActions } from 'store/ducks/users';

function* search(action) {
  try {
    const { text, coordinates } = action.payload;
    const {
      data: {
        id, name, login, avatar_url: avatar, url,
      },
    } = yield call(api.get, `/users/${text}`);

    const user = {
      id,
      name,
      login,
      avatar,
      url,
      coordinates,
    };

    yield put(UsersActions.addUserSuccess(user));
  } catch (err) {
    console.log(err);
  }
}

export default function* root() {
  yield takeLatest(UsersTypes.ADD_REQUEST, search);
}

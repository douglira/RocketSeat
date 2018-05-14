import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { api } from 'services/axios';

import { Types as UsersTypes } from 'store/ducks/users';

export function* addUser(action) {
  try {
    const response = yield call(api.get, `/users/${action.payload.user}`);

    const users = yield select(state => state.users.data);

    if (users.find(user => user.id === response.data.id)) {
      yield put({ type: UsersTypes.ADD_FAILURE, errorMessage: 'Usuário já adicionado.' });
      yield delay(3000);
      yield put({ type: UsersTypes.ADD_RESET });
    } else {
      yield put({
        type: UsersTypes.ADD_SUCCESS,
        user: {
          id: response.data.id,
          avatar_url: response.data.avatar_url,
          name: response.data.name,
          bio: response.data.bio,
          coordinates: action.payload.coordinates,
        },
      });

      yield call(action.payload.onSuccess);
    }
  } catch (err) {
    yield put({ type: UsersTypes.ADD_FAILURE, errorMessage: 'Este usuário não existe' });
    yield delay(3000);
    yield put({ type: UsersTypes.ADD_RESET });
  }
}

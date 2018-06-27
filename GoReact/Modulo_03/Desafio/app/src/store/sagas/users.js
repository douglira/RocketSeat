import { takeLatest, call, put } from 'redux-saga/effects';
import { api } from 'services/api';
import { toast } from 'react-toastify';

import { Types as UsersTypes, Creators as UsersActions } from 'store/ducks/users';

function* search(action) {
  try {
    const { text, coords } = action.payload;
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
      coords,
    };

    yield put(UsersActions.addUserSuccess(user));
    toast.success('Usuario adicionado com sucesso');
  } catch (err) {
    if (err.response.status === 404) {
      toast.error('Usuário não encontrado');
      return;
    }

    toast.error('Um erro inesperado aconteceu. Tente novamente');
  }
}

export default function* root() {
  yield takeLatest(UsersTypes.ADD_REQUEST, search);
}

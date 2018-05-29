import { takeLatest, call, put, select } from 'redux-saga/effects';
import { api } from '../../services/api';

import { Types as FavoritesTypes, Creators as FavoritesActions } from '../ducks/favorites';

function* addFavorite(action) {
  try {
    const { data: repository } = yield call(api.get, `/repos/${action.payload.repository}`);

    const isDuplicated = yield select(state =>
      state.favorites.data.find(favorite => favorite.id === repository.id));

    if (isDuplicated) {
      yield put(FavoritesActions.addFavoriteFailure('Repositório já existe!'));
    } else {
      const data = {
        id: repository.id,
        name: repository.full_name,
        description: repository.description,
        html_url: repository.html_url,
      };

      yield put(FavoritesActions.addFavoriteSuccess(data));
    }
  } catch (err) {
    yield put(FavoritesActions.addFavoriteFailure('Erro ao adicionar o repositório'));
  }
}

export default function* root() {
  yield takeLatest(FavoritesTypes.ADD_REQUEST, addFavorite);
}

import { call, put, select } from 'redux-saga/effects';
import api from 'services/axios';

import { Types as FavoritesTypes } from 'store/ducks/favorites';

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, `/repos/${action.payload.repoName}`);

    const favorites = yield select(state => state.favorites.data);

    if (favorites.find(favorite => favorite.id === response.data.id)) {
      yield put({ type: FavoritesTypes.ADD_FAILURE, message: 'Repositório já existe' });
    } else {
      yield put({ type: FavoritesTypes.ADD_SUCCESS, favorite: response.data });
    }
  } catch (err) {
    yield put({ type: FavoritesTypes.ADD_FAILURE, message: 'Repositório não existe' });
  }
}

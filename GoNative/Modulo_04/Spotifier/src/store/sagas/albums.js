import { api } from 'services/axios';
import { call, put } from 'redux-saga/effects';

import { Types as AlbumsTypes } from 'store/ducks/albums';

export function* getAlbums() {
  try {
    const response = yield call(api.get, '/albums');

    yield put({
      type: AlbumsTypes.GET_SUCCESS,
      payload: { data: response.data },
    });
  } catch (err) {
    yield put({
      type: AlbumsTypes.GET_FAILURE,
      payload: {
        error: 'Erro ao buscar os albums',
      },
    });
  }
}

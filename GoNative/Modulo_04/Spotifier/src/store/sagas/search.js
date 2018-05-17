import { call, put } from 'redux-saga/effects';
import { api } from 'services/axios';

import { Types as SearchTypes } from 'store/ducks/search';

export function* search(action) {
  try {
    const response = yield call(api.get, `/songs?q=${action.payload.term}`);

    yield put({
      type: SearchTypes.SUCCESS,
      payload: { data: response.data },
    });
  } catch (err) {
    yield put({
      type: SearchTypes.FAILURE,
      payload: { error: 'Não foi possível realizar a busca' },
    });
  }
}

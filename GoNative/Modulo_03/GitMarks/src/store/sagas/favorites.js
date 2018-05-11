import { call, put } from 'redux-saga/effects';
import api from 'services/axios';

export function* addFavoriteRequest(action) {
  const response = yield call(api.get, `/repos/${action.payload.repoName}`);

  console.tron.log(response);
  yield put({ type: 'ADD_FAVORITE_SUCCESS', payload: response.data });
}

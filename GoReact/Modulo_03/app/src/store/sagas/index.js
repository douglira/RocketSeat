import { all } from 'redux-saga/effects';

import sagaFavorites from './favorites';

export default function* rootSaga() {
  yield all([sagaFavorites()]);
}

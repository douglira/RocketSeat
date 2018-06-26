import { all } from 'redux-saga/effects';

import usersSagas from './users';

export default function* rootSaga() {
  yield all([usersSagas()]);
}

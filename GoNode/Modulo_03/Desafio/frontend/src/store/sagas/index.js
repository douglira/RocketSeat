import { all } from 'redux-saga/effects';

import userSaga from './user';
import postsSaga from './posts';

export default function* rootSaga() {
  yield all([userSaga(), postsSaga()]);
}

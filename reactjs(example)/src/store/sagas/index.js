import { all } from 'redux-saga/effects';

import userSaga from './user';
import adminSaga from './admin';

export default function* rootSagas() {
  yield all([userSaga(), adminSaga()]);
}

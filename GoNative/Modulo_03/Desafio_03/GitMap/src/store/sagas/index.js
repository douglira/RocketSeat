import { all, takeLatest } from 'redux-saga/effects';

import { Types as UsersTypes } from 'store/ducks/users';
import { addUser } from './users';

export default function* rootSaga() {
  return yield all([
    takeLatest(UsersTypes.ADD_REQUEST, addUser),
  ]);
}

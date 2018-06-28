import { all } from 'redux-saga/effects';

import categoriesSagas from './categories';
import productsSagas from './products';

export default function* sagasRoot() {
  yield all([categoriesSagas(), productsSagas()]);
}

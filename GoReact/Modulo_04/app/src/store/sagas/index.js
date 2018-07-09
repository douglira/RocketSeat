import { all } from 'redux-saga/effects';

import playlists from './playlists';

export default function* rootSaga() {
  yield all([playlists()]);
}

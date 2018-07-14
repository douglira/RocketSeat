import { all } from 'redux-saga/effects';

import playlists from './playlists';
import playlistDetails from './playlistDetails';

export default function* rootSaga() {
  yield all([playlists(), playlistDetails()]);
}

import { takeLatest, call, put } from 'redux-saga/effects';
import { api } from 'services/api';

import { Creators as PlaylistsActions, Types as PlaylistsTypes } from 'store/ducks/playlists';

function* getPlaylists() {
  try {
    const response = yield call(api.get, '/playlists');

    yield put(PlaylistsActions.getPlaylistsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}

export default function* rootPlaylists() {
  yield takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists);
}

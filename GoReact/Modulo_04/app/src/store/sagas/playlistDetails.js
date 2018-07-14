import { takeLatest, call, put } from 'redux-saga/effects';
import { api } from 'services/api';

import {
  Creators as PlaylistDetailsActions,
  Types as PlaylistDetailsTypes,
} from 'store/ducks/playlistDetails';

function* getPlaylistDetails(action) {
  try {
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}

export default function* rootPlaylistDetails() {
  yield takeLatest(PlaylistDetailsTypes.GET_REQUEST, getPlaylistDetails);
}

import { call, put } from 'redux-saga';
import RNSound from 'react-native-sound/sound';

import { Types as PlayerActions } from 'store/ducks/player';

const Sound = new RNSound();

export function* play() {
  try {
    yield call(Sound.play);
  } catch (err) {
    console.tron.log(err);
  }
}

export function* setSong(action) {
  try {
    if (Sound.isLoaded()) yield call(Sound.release);

    yield call(Sound.init, action.payload.song.file);
    yield call(Sound.play);

    yield put({
      type: PlayerActions.SET_SONG_SUCCESS,
      payload: { song: action.payload.song },
    });
  } catch (err) {
    yield put({
      type: PlayerActions.SET_SONG_FAILURE,
      payload: { error: 'Não foi possível tocar a música' },
    });
  }
}

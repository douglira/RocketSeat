import { call, put, select } from 'redux-saga/effects';
import RNSound from 'react-native-sound/sound';

import { Types as PlayerTypes } from 'store/ducks/player';

const Sound = new RNSound();

export function* play() {
  try {
    yield call(Sound.play);
  } catch (err) {
    console.tron.log(err);
  }
}

export function* pause() {
  try {
    yield call(Sound.pause);
  } catch (err) {
    console.tron.log(err);
  }
}

export function* next() {
  try {
    const player = yield select(state => state.player);

    const currentIndex = player.list.findIndex(song => song.id === player.currentSong.id);
    const nextSong = player.list[currentIndex + 1];

    if (nextSong) {
      yield put({
        type: PlayerTypes.SET_SONG_REQUEST,
        payload: {
          song: nextSong,
          list: player.list,
        },
      });
    } else {
      yield put({
        type: PlayerTypes.SET_SONG_REQUEST,
        payload: {
          song: player.list[0],
          list: player.list,
        },
      });
    }
  } catch (err) {
    console.tron.log(err);
  }
}

export function* previous() {
  try {
    const player = yield select(state => state.player);

    const currentIndex = player.list.findIndex(song => song.id === player.currentSong.id);
    const previousSong = player.list[currentIndex - 1];

    if (previousSong) {
      yield put({
        type: PlayerTypes.SET_SONG_REQUEST,
        payload: {
          song: previousSong,
          list: player.list,
        },
      });
    } else {
      yield put({
        type: PlayerTypes.SET_SONG_REQUEST,
        payload: {
          song: player.list[player.list.length - 1],
          list: player.list,
        },
      });
    }
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
      type: PlayerTypes.SET_SONG_SUCCESS,
      payload: {
        song: action.payload.song,
        list: action.payload.list,
      },
    });
  } catch (err) {
    yield put({
      type: PlayerTypes.SET_SONG_FAILURE,
      payload: { error: 'Não foi possível tocar a música' },
    });
  }
}

import Immutable from 'seamless-immutable';

export const Types = {
  SET_SONG_REQUEST: 'player/SET_SONG_REQUEST',
  SET_SONG_SUCCESS: 'player/SET_SONG_SUCCESS',
  SET_SONG_FAILURE: 'player/SET_SONG_FAILURE',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  NEXT: 'player/NEXT',
  PREVIOUS: 'player/PREVIOUS',
};

const INITIAL_STATE = Immutable({
  list: [],
  currentSong: {},
  loadingId: null,
  error: null,
  paused: false,
});

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_SONG_REQUEST:
      return { ...state, loadingId: action.payload.song.id };
    case Types.SET_SONG_SUCCESS:
      return {
        ...state,
        paused: false,
        currentSong: action.payload.song,
        loadingId: null,
        list: action.payload.list,
      };
    case Types.SET_SONG_FAILURE:
      return { ...state, loadingId: null, error: action.payload.error };
    case Types.PLAY:
      return { ...state, paused: false };
    case Types.PAUSE:
      return { ...state, paused: true };
    default:
      return state;
  }
}

export const Creators = {
  setSongRequest: (song, list) => ({
    type: Types.SET_SONG_REQUEST,
    payload: { song, list },
  }),

  play: () => ({
    type: Types.PLAY,
  }),

  pause: () => ({
    type: Types.PAUSE,
  }),

  next: () => ({
    type: Types.NEXT,
  }),

  previous: () => ({
    type: Types.PREVIOUS,
  }),
};

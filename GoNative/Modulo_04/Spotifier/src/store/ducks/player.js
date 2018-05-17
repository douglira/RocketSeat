import Immutable from 'seamless-immutable';

export const Types = {
  SET_SONG_REQUEST: 'player/SET_SONG_REQUEST',
  SET_SONG_SUCCESS: 'player/SET_SONG_SUCCESS',
  SET_SONG_FAILURE: 'player/SET_SONG_FAILURE',
};

const INITIAL_STATE = Immutable({
  currentSong: null,
});

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_SONG_SUCCESS:
      return { ...state, currentSong: action.payload.song };
    default:
      return state;
  }
}

export const Creators = {
  setSongRequest: song => ({
    type: Types.SET_SONG_REQUEST,
    payload: { song },
  }),
};

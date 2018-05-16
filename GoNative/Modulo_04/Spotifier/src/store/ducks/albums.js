import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'albums/GET_REQUEST',
  GET_SUCCESS: 'albums/GET_SUCCESS',
  GET_FAILURE: 'albums/GET_FAILURE',
};

const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: null,
});

export default function albums(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_SUCCESS:
      return {
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case Types.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export const Creators = {
  getAlbumsRequest: () => ({
    type: Types.GET_REQUEST,
  }),
};

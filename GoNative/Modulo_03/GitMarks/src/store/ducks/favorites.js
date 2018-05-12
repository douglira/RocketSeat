export const Types = {
  ADD_REQUEST: 'favorites/ADD_REQUEST',
  ADD_SUCCESS: 'favorites/ADD_SUCCESS',
  ADD_FAILURE: 'favorites/ADD_FAILURE',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  errorOnAdd: null,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_SUCCESS:
      return {
        data: [...state.data, action.favorite],
        errorOnAdd: null,
        loading: false,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        errorOnAdd: action.message,
      };
    default:
      return state;
  }
}

export const Creators = {
  addFavoriteRequest: repoName => ({
    type: Types.ADD_REQUEST,
    payload: {
      repoName,
    },
  }),
};

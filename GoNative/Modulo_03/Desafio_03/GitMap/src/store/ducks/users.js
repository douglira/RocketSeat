export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
  ADD_RESET: 'users/ADD_RESET',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  errorMessage: null,
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: null,
      };
    case Types.ADD_SUCCESS:
      return {
        data: [...state.data, action.user],
        loading: false,
        error: false,
        errorMessage: null,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.errorMessage,
      };
    case Types.ADD_RESET:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
      };
    default:
      return state;
  }
}

export const Creators = {
  addUser: payload => ({
    type: Types.ADD_REQUEST,
    payload,
  }),
};

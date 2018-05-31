export const Types = {
  CHECK_AUTH: 'user/CHECK_AUTH',
  AUTH_STATUS: 'user/AUTH_STATUS',
  SIGNUP_REQUEST: 'user/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'user/SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'user/SIGNUP_FAILURE',
};

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: null,
  isAuthenticated: false,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.AUTH_STATUS:
      return { ...state, isAuthenticated: action.payload.isAuthenticated };
    default:
      return state;
  }
}

export const Creators = {
  checkAuth: () => ({
    type: Types.CHECK_AUTH,
  }),

  authStatus: isAuthenticated => ({
    type: Types.AUTH_STATUS,
    payload: { isAuthenticated },
  }),
};

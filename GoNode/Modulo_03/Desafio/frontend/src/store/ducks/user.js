export const Types = {
  CHECK_AUTH: 'user/CHECK_AUTH',
  SIGNIN_REQUEST: 'user/SIGNIN_REQUEST',
  AUTHORIZED: 'user/AUTHORIZED',
  UNAUTHORIZED: 'user/UNAUTHORIZED',
  SIGNOUT_REQUEST: 'user/SIGNOUT_REQUEST',
  SIGNOUT_RESET: 'user/SIGNOUT_RESET',
};

export const Creators = {
  checkAuth: () => ({
    type: Types.CHECK_AUTH,
  }),

  signinRequest: credentials => ({
    type: Types.SIGNIN_REQUEST,
    payload: { credentials },
  }),

  authorized: user => ({
    type: Types.AUTHORIZED,
    payload: { user },
  }),

  unauthorized: error => ({
    type: Types.UNAUTHORIZED,
    payload: { error },
  }),

  signoutRequest: ({ redirect }) => ({
    type: Types.SIGNOUT_REQUEST,
    payload: { redirect },
  }),

  signoutReset: () => ({
    type: Types.SIGNOUT_RESET,
  }),
};

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: null,
  isAuthenticated: false,
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CHECK_AUTH:
      return { ...state, loading: true };
    case Types.SIGNIN_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.AUTHORIZED:
      return {
        data: action.payload.user,
        loading: false,
        error: null,
        isAuthenticated: true,
      };
    case Types.UNAUTHORIZED:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        isAuthenticated: false,
      };
    case Types.SIGNOUT_RESET:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
}

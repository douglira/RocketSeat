export const Types = {
  CHECK_AUTH: 'user/CHECK_AUTH',

  SIGNIN_REQUEST: 'user/SIGNIN_REQUEST',
  AUTHORIZED: 'user/AUTHORIZED',
  UNAUTHORIZED: 'user/UNAUTHORIZED',

  SIGNOUT_REQUEST: 'user/SIGNOUT_REQUEST',
  SIGNOUT_RESET: 'user/SIGNOUT_RESET',

  USER_PROFILE_REQUEST: 'user/USER_PROFILE_REQUEST',
  USER_PROFILE_SUCCESS: 'user/USER_PROFILE_SUCCESS',
  USER_PROFILE_FAILURE: 'user/USER_PROFILE_FAILURE',
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

  profileRequest: id => ({
    type: Types.USER_PROFILE_REQUEST,
    payload: { id },
  }),

  profileSuccess: user => ({
    type: Types.USER_PROFILE_SUCCESS,
    payload: { user },
  }),

  profileFailure: error => ({
    type: Types.USER_PROFILE_FAILURE,
    payload: { error },
  }),
};

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: null,
  isAuthenticated: false,
  info: {},
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

    case Types.USER_PROFILE_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.USER_PROFILE_SUCCESS:
      return { ...state, loading: false, info: action.payload.user };
    case Types.USER_PROFILE_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

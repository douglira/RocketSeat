import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    verifyAuth: [],

    signinRequest: ['credentials'],
    signinSuccess: ['user'],
    signinFailure: ['error'],

    signupRequest: ['data', 'cbNavigation'],
    signupSuccess: [],
    signupFailure: ['error'],

    forgotPassRequest: ['email', 'cbNavigation'],
    forgotPassResponse: [],

    resetPassRequest: ['data', 'cbNavigation'],
    resetPassResponse: [],

    signout: (logout = true) => ({ type: 'SIGNOUT', logout }),
  },
  { prefix: 'user/' },
);

const INITIAL_STATE = {
  isAuthenticated: false,
  isSigningin: false,
  isSigningup: false,
  loading: false,
  error: null,
  data: {
    role: '',
  },
};

const verifyAuth = (state = INITIAL_STATE) => ({ ...state, loading: true });

const signinRequest = (state = INITIAL_STATE) => ({
  ...state,
  isSigningin: true,
  loading: false,
  error: null,
  isAuthenticated: false,
});

const signinSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isSigningin: false,
  loading: false,
  isAuthenticated: true,
  data: action.user,
});

const signinFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isSigningin: false,
  loading: false,
  isAuthenticated: false,
  error: action.error,
});

const signupRequest = (state = INITIAL_STATE) => ({
  ...state,
  isSigningup: true,
  error: false,
});

const signupSuccess = (state = INITIAL_STATE) => ({
  ...state,
  isSigningup: false,
});

const signupFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isSigningup: false,
  error: action.error,
});

const forgotPassRequest = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const forgotPassResponse = (state = INITIAL_STATE) => ({
  ...state,
  loading: false,
});

const resetPassRequest = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const resetPassResponse = (state = INITIAL_STATE) => ({
  ...state,
  loading: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.VERIFY_AUTH]: verifyAuth,

  [Types.SIGNIN_REQUEST]: signinRequest,
  [Types.SIGNIN_SUCCESS]: signinSuccess,
  [Types.SIGNIN_FAILURE]: signinFailure,

  [Types.SIGNUP_REQUEST]: signupRequest,
  [Types.SIGNUP_SUCCESS]: signupSuccess,
  [Types.SIGNUP_FAILURE]: signupFailure,

  [Types.FORGOT_PASS_REQUEST]: forgotPassRequest,
  [Types.FORGOT_PASS_RESPONSE]: forgotPassResponse,

  [Types.RESET_PASS_REQUEST]: resetPassRequest,
  [Types.RESET_PASS_RESPONSE]: resetPassResponse,
});

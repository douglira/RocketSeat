import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  allUsersRequest: ['page', 'perPage'],
  allUsersSuccess: ['data'],
  allUsersFailure: ['error'],
});

const INITIAL_STATE = {
  allUsers: {
    loading: false,
    error: null,
    total: 0,
    page: 1,
    perPage: 20,
    lastPage: 0,
    data: [],
  },
};

const allUsersRequest = (state = INITIAL_STATE) => ({
  ...state,
  allUsers: { ...state.allUsers, loading: true, error: null },
});

const allUsersSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  allUsers: { ...state.allUsers, loading: false, ...action.data },
});

const allUsersFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  allUsers: { ...state.allUsers, loading: false, error: action.payload.error },
});

export default createReducer(INITIAL_STATE, {
  [Types.ALL_USERS_REQUEST]: allUsersRequest,
  [Types.ALL_USERS_SUCCESS]: allUsersSuccess,
  [Types.ALL_USERS_FAILURE]: allUsersFailure,
});

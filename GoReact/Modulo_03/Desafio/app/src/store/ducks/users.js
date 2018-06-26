export const Types = {
  ADD_REQUEST: 'user/ADD_REQUEST',
  ADD_SUCCESS: 'user/ADD_SUCCESS',
  ADD_FAILURE: 'user/ADD_FAILURE',

  REMOVE: 'user/REMOVE',
};

export const Creators = {
  addUserRequest: (text, coordinates) => ({
    type: Types.ADD_REQUEST,
    payload: { text, coordinates },
  }),

  addUserSuccess: user => ({
    type: Types.ADD_SUCCESS,
    payload: { user },
  }),

  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),

  removeUser: id => ({
    type: Types.REMOVE,
    payload: { id },
  }),
};

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: [],
};

function remove(users, id) {
  const index = users.indexOf(user => user.id === id);
  users.splice(index, 1);

  return [...users];
}

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.ADD_SUCCESS:
      return { data: [...state.data, action.payload.user], loading: false, error: null };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.REMOVE:
      return { ...state, data: remove(state.data, action.payload.id) };
    default:
      return state;
  }
}

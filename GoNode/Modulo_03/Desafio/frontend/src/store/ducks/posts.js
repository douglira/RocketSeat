export const Types = {
  POSTS_REQUEST: 'posts/POSTS_REQUEST',
  POSTS_SUCCESS: 'posts/POSTS_SUCCESS',
  POSTS_FAILURE: 'posts/POSTS_FAILURE',

  REALTIME_ADD: 'post/REALTIME_ADD',
  REALTIME_REPLACE: 'post/REALTIME_REPLACE',
  REALTIME_DELETE: 'post/REALTIME_DELETE',

  POST_ADD_REQUEST: 'post/POST_ADD',
  POST_ADD_SUCCESS: 'post/POST_ADD_SUCCESS',
  POST_ADD_FAILURE: 'post/POST_ADD_FAILURE',
};

export const Creators = {
  postsRequest: () => ({
    type: Types.POSTS_REQUEST,
  }),

  postsSuccess: posts => ({
    type: Types.POSTS_SUCCESS,
    payload: { posts },
  }),

  postsFailure: error => ({
    type: Types.POSTS_FAILURE,
    payload: { error },
  }),

  realtimeAddPost: post => ({
    type: Types.REALTIME_ADD,
    payload: { post },
  }),

  realtimeReplacePost: post => ({
    type: Types.REALTIME_REPLACE,
    payload: { post },
  }),

  realtimeDeletePost: post => ({
    type: Types.REALTIME_DELETE,
    payload: { post },
  }),

  addPost: post => ({
    type: Types.POST_ADD_REQUEST,
    payload: { post },
  }),

  addPostSuccess: fullPost => ({
    type: Types.POST_ADD_SUCCESS,
    payload: { fullPost },
  }),

  addPostFailure: error => ({
    type: Types.POST_ADD_FAILURE,
    payload: { error },
  }),
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

function realtimeReplacePost(state, action) {
  const { post } = action.payload;
  const { data } = state;

  const index = data.findIndex(postState => postState._id === post._id);
  data.splice(index, 1, post);

  return { ...state, data };
}

function realtimeDeletePost(state, action) {
  const { post } = action.payload;
  const { data } = state;

  const index = data.findIndex(postState => postState._id === post._id);
  if (index !== -1) {
    data.splice(index, 1);
    return { ...state, data };
  }

  return state;
}

export default function postsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.POSTS_REQUEST:
      return { ...state, loading: true };
    case Types.POSTS_SUCCESS:
      return { data: action.payload.posts, loading: false, error: null };
    case Types.POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case Types.REALTIME_ADD:
      return { ...state, data: [action.payload.post, ...state.data] };
    case Types.REALTIME_REPLACE:
      return realtimeReplacePost(state, action);
    case Types.REALTIME_DELETE:
      return realtimeDeletePost(state, action);

    case Types.POST_ADD_REQUEST:
      return { ...state, loading: true };
    case Types.POST_ADD_SUCCESS:
      return { data: [action.payload.fullPost, ...state.data], loading: false, error: null };
    case Types.POST_ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

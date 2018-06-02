import { takeLatest, call, put } from 'redux-saga/effects';

import { Types as PostsTypes, Creators as PostsActions } from 'store/ducks/posts';
import { api } from 'services/api';

function* getAll() {
  try {
    const response = yield call(api.get, '/posts');

    yield put(PostsActions.postsSuccess(response.data));
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put(PostsActions.postsFailure(err.response.data.error));
      return;
    }

    yield put(PostsActions.postsFailure('Unexpected error. Try again later'));
  }
}

function* add(action) {
  try {
    const response = yield call(api.post, '/posts', { content: action.payload.post });

    yield put(PostsActions.addPostSuccess(response.data));
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put(PostsActions.addPostFailure(err.response.data.error));
    }

    yield put(PostsActions.postsFailure('Unexpected error. Try again later'));
  }
}

function* toggleLike(action) {
  try {
    const { postId } = action.payload;

    yield call(api.put, `/posts/${postId}/like`);
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put(PostsActions.toggleLikeFailure(err.response.data.error));
    }

    yield put(PostsActions.toggleLikeFailure('Unexpected error. Try again later'));
  }
}

export default function* rootPosts() {
  yield takeLatest(PostsTypes.POSTS_REQUEST, getAll);
  yield takeLatest(PostsTypes.POST_ADD_REQUEST, add);
  yield takeLatest(PostsTypes.TOGGLE_LIKE_REQUEST, toggleLike);
}

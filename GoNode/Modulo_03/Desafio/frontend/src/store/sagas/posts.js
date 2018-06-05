import { takeLatest, call, put } from 'redux-saga/effects';

import { Types as PostsTypes, Creators as PostsActions } from 'store/ducks/posts';
import { Creators as NotificationActions } from 'store/ducks/notification';
import { api } from 'services/api';

function* getAll() {
  try {
    const response = yield call(api.get, '/posts');

    yield put(PostsActions.postsSuccess(response.data));
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put(NotificationActions.pushNotification(err.response.data.error));
      return;
    }

    yield put(NotificationActions.pushNotification('Unexpected error. Try again later'));
  }
}

function* add(action) {
  try {
    const response = yield call(api.post, '/posts', { content: action.payload.post });

    yield put(PostsActions.addPostSuccess(response.data));
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put(NotificationActions.pushNotification(err.response.data.error));
    }

    yield put(NotificationActions.pushNotification('Unexpected error. Try again later'));
  }
}

function* edit(action) {
  try {
    const { content, postId } = action.payload;

    yield call(api.put, `/posts/${postId}`, { content });
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put(NotificationActions.pushNotification(err.response.data.error));
    }

    yield put(NotificationActions.pushNotification('Unexpected error. Try again later'));
  }
}

function* destroy(action) {
  try {
    const { postId } = action.payload;

    yield call(api.delete, `/posts/${postId}`);
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put(NotificationActions.pushNotification(err.response.data.error));
    }

    yield put(NotificationActions.pushNotification('Unexpected error. Try again later'));
  }
}

function* toggleLike(action) {
  try {
    const { postId } = action.payload;

    yield call(api.put, `/posts/${postId}/like`);
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put(NotificationActions.pushNotification(err.response.data.error));
    }

    yield put(NotificationActions.pushNotification('Unexpected error. Try again later'));
  }
}

function* newComment(action) {
  try {
    const { content, postId } = action.payload;

    yield call(api.post, `/post/${postId}/comment`, { content });
  } catch (err) {
    if (err.response.data && err.response.data.error) {
      yield put(NotificationActions.pushNotification(err.response.data.error));
    }

    yield put(NotificationActions.pushNotification('Unexpected error. Try again later'));
  }
}

function* getAllNotifications() {
  try {
    const { data } = yield call(api.get, '/posts/notifications');

    yield put(PostsActions.postsNotificationsSuccess(data));
  } catch (err) {
    yield put(NotificationActions.pushNotification('It was not possible to import post notifications'));
  }
}

export default function* rootPosts() {
  yield takeLatest(PostsTypes.POSTS_REQUEST, getAll);
  yield takeLatest(PostsTypes.POST_ADD_REQUEST, add);
  yield takeLatest(PostsTypes.POST_EDIT_REQUEST, edit);
  yield takeLatest(PostsTypes.POST_DELETE_REQUEST, destroy);
  yield takeLatest(PostsTypes.TOGGLE_LIKE_REQUEST, toggleLike);
  yield takeLatest(PostsTypes.NEW_COMMENT_REQUEST, newComment);
  yield takeLatest(PostsTypes.POSTS_NOTIFICATION_REQUEST, getAllNotifications);
}

import { call, put, takeLatest } from "redux-saga/effects";

import { projectService } from "../../../services/ProjectService";

function* getPostsSaga() {
  try {
    const { data } = yield call(() => projectService.getPosts());
    yield put({
      type: "GET_POST",
      data,
    });
  } catch (err) {
    console.log(err);
  }
}

export function* getPostsTracker() {
  yield takeLatest("GET_POSTS_API", getPostsSaga);
}

function* createPostSaga(action) {
  try {
    const { data } = yield call(() => projectService.createPost(action.data));
    yield put({
      type: "GET_POSTS_API",
    });
  } catch (err) {
    console.log(err);
  }
}

export function* createPostTracker() {
  yield takeLatest("CREATE_POST_API", createPostSaga);
}

function* deletePostSaga(action) {
  console.log(
    "🚀 ~ file: ProjectSaga.js ~ line 37 ~ function*deletePostSaga ~ action",
    action.data
  );

  try {
    const { data } = yield call(() => projectService.deletePost(action.data));
    yield put({
      type: "GET_POSTS_API",
    });
  } catch (err) {
    console.log(err);
  }
}

export function* deletePostTracker() {
  yield takeLatest("DELETE_POST_API", deletePostSaga);
}

function* updatePostSaga(action) {
  try {
    const { data } = yield call(() => projectService.updatePost(action.data));
    console.log(
      "🚀 ~ file: ProjectSaga.js ~ line 25 ~ function*createPost ~ data",
      data
    );
    yield put({
      type: "GET_POSTS_API",
    });
  } catch (err) {
    console.log(err);
  }
}

export function* updatePostTracker() {
  yield takeLatest("UPDATE_POST_API", updatePostSaga);
}

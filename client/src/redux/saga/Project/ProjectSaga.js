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

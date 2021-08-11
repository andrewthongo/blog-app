import { all } from "redux-saga/effects";
import * as Project from "./Project/ProjectSaga";

export function* rootSaga() {
  yield all([Project.getPostsTracker()]);
}

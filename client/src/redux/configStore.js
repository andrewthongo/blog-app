import { applyMiddleware, combineReducers, createStore } from "redux";
import { ProjectReducer } from "./reducers/ProjectReducer";
import createMiddleWareSaga from "redux-saga";
import { rootSaga } from "./saga/rootSaga";

const middleWareSaga = createMiddleWareSaga();
const rootReducer = combineReducers({
  ProjectReducer,
});

const store = createStore(rootReducer, applyMiddleware(middleWareSaga));

middleWareSaga.run(rootSaga);

export default store;

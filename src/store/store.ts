import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers/rootReducer";
import rootSaga from "./saga/rootSaga";

const saga = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga)),
);

saga.run(rootSaga);

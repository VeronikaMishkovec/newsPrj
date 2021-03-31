import { all } from 'redux-saga/effects';
import newsListSaga from './listSaga';

export default function* rootSaga() {
  yield all([newsListSaga()]);
}

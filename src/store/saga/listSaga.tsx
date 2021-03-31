import { put, call, takeLatest } from 'redux-saga/effects';
import { getNewsList } from '../service';
import { GET_NEWS_LIST, SET_NEWS_LIST } from '../actions/action';

function* newsList() {
  const payload: {} = yield call(getNewsList);
  const res: {} = yield put({ type: SET_NEWS_LIST, payload });
  return res
}

export default function* newsListSaga() {
  yield takeLatest(GET_NEWS_LIST, newsList)
}
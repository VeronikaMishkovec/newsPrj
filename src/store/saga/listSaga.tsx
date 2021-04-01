import { put, call, takeLatest } from 'redux-saga/effects';
import { getNewsList } from '../service';
import { GET_NEWS_LIST, SET_NEWS_LIST } from '../actions/action';
import { List } from '../type';

function* newsList() {
  const payload: List[] = yield call(getNewsList);
  const res: Object = yield put({ type: SET_NEWS_LIST, payload });
  return res;
}

export default function* newsListSaga() {
  yield takeLatest(GET_NEWS_LIST, newsList);
}
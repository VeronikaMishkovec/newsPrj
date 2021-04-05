import { put, call, takeEvery } from 'redux-saga/effects';
import { getNewsList } from '../service';
import { GET_NEWS_LIST, SET_NEWS_LIST } from '../actions/action';
import { List, NewsListActionType } from '../type';

function* newsList() {
  try {
    const payload: List[] = yield call(getNewsList);
    const res: NewsListActionType = yield put({
      type: SET_NEWS_LIST,
      payload,
    });
    return res.payload.data;
  } catch (e) {
    console.log('Something goes wrong', e);
  }
}

export default function* newsListSaga() {
  yield takeEvery(GET_NEWS_LIST, newsList);
}

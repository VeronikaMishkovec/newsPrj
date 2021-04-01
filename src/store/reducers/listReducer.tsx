import { GET_NEWS_LIST, SET_NEWS_LIST } from '../actions/action';
import { List } from '../type';

const initialState = {
  list: [],
};

export const newsList = (state = initialState, action: { type: string; payload: List[]; }) => {
  switch (action.type) {
    case GET_NEWS_LIST:
      return { ...state };
    case SET_NEWS_LIST:
      return { ...state, list: action.payload };
    default:
      return { ...state };
  }
};

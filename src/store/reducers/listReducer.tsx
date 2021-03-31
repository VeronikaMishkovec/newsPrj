import { GET_NEWS_LIST, SET_NEWS_LIST } from '../actions/action';

const initialState = {
  list: [],
};

export const newsList = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_NEWS_LIST:
      return { ...state };
    case SET_NEWS_LIST:
      return { ...state, list: action.list };
    default:
      return { ...state };
  }
};

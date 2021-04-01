import { GET_NEWS_LIST, SET_NEWS_LIST } from '../actions/action';

const initialState = {
  list: [],
};

type ActionType = {
  type: string;
  payload: [];
};

export const newsList = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case GET_NEWS_LIST:
      return { ...state };
    case SET_NEWS_LIST:
      return { ...state, list: action.payload };
    default:
      return { ...state };
  }
};

import { combineReducers } from 'redux';
import { newsList } from '../reducers/listReducer';

export const rootReducer = combineReducers({ newsList });

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsList } from '../../store/actions/action';
import { rootReducer } from '../../store/reducers/rootReducer';
import { List } from '../../store/type';

import { NewsListView } from './NewsListView';

export const NewsList = () => {
  const dispatch = useDispatch();
  // use root state types
  const newsList = useSelector((state: typeof rootReducer) => state.newsList.list);

  useEffect(() => {
    dispatch(getNewsList());
  }, []);

  return <NewsListView data={newsList} />;
};

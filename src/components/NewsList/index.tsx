import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsList } from '../../store/actions/action';
import { List } from '../../store/type';

import { NewsListView } from './NewsListView';

export const NewsList = () => {
  const dispatch = useDispatch();
  const newsList = useSelector((state: List[]) => state.newsList.list);

  useEffect(() => {
    dispatch(getNewsList());
  }, []);

  return <NewsListView data={newsList} />;
};

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsList } from '../../store/actions/action';

import { NewsListView } from './NewsListView';
import { RootState } from './types';

export const NewsList = () => {
  const dispatch = useDispatch();

  const newsList = useSelector((state: RootState) => state.newsList.list);

  useEffect(() => {
    dispatch(getNewsList());
  }, []);

  return <NewsListView data={newsList} />;
};

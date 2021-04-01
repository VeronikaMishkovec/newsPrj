import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsList } from '../../store/actions/action';

import { NewsListView } from './view';

export const NewsList = () => {
  const dispatch = useDispatch();
  const newsList = useSelector(state => state.newsList.list);

  useEffect(() => {
    dispatch(getNewsList());
  }, []);

  return <NewsListView data={newsList} />;
};

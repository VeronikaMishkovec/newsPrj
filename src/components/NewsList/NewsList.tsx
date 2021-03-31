import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItem, Text, View } from 'react-native';

import { NewsItem } from '../NewsCard/NewsCard';
import { NewsListTypes } from './types';
import { getNewsList } from '../../store/service';

export const NewsList = () => {
  const [list, setList] = useState([]);

  const renderItems: ListRenderItem<NewsListTypes> = ({ item }) => {
    const isMedia =
      Object.values(item.media).length > 0 && Object.values(item.media[0])[5];

    const newsImage = isMedia
      ? isMedia[2].url
      : 'https://cdn.pixabay.com/photo/2017/02/16/19/47/bokeh-2072271__340.jpg';

    return (
      <NewsItem
        title={item.title}
        subtitle={item.abstract}
        published_date={item.published_date}
        section={item.section}
        author={item.byline}
        url={item.url}
        src={newsImage}
      />
    );
  };

  useEffect(() => {
    getNewsList().then(res => setList(res));
  }, []);

  return (
    <FlatList
      data={list}
      renderItem={renderItems}
      keyExtractor={item => item.id}
      initialNumToRender={3}
    />
  );
};

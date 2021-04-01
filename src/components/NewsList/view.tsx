import React, { FC } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { NewsCard } from '../NewsCard';
import { NewsListTypes, NewsListViewTypes } from './types';

export const NewsListView: FC<NewsListViewTypes> = props => {
  const { data } = props;

  const renderItems: ListRenderItem<NewsListTypes> = ({ item }) => {
    const isMedia =
      Object.values(item.media).length > 0 && Object.values(item.media[0])[5];

    const newsImage = isMedia
      ? isMedia[2].url
      : 'https://cdn.pixabay.com/photo/2017/02/16/19/47/bokeh-2072271__340.jpg';

    return (
      <NewsCard
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
  return (
    <FlatList
      data={data}
      renderItem={renderItems}
      keyExtractor={item => item.id}
    />
  );
};

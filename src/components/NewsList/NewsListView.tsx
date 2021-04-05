import React, { FC, useEffect } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { NewsCard } from '../NewsCard';
import { NewsListTypes, NewsListViewTypes } from './types';

export const NewsListView: FC<NewsListViewTypes> = props => {
  const { data } = props;

  const renderItems: ListRenderItem<NewsListTypes> = ({ item }) => {
    const media_data = item.media[0];

    const newsImage = media_data && media_data['media-metadata'][2].url;

    return (
      <NewsCard
        author={item.byline}
        published_date={item.published_date}
        section={item.section}
        src={newsImage}
        subtitle={item.abstract}
        title={item.title}
        url={item.url}
      />
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItems}
    />
  );
};

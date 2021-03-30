import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { NewsItem } from '../components/NewsCard';

export const NewsList = () => {
  const [list, setList] = useState([]);

  const getNewsList = async () => {
    const res = await fetch(
      'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=cEWFEXyy9FAG4sCXACpPK4XYRp44Uenr',
    );
    const data = await res.json();
    console.log(data.results)
    return data.results;
  };

  const renderItems = ({ item }: any) => (
    <NewsItem
      title={item.title}
      subtitle={item.abstract}
      published_date={item.published_date}
      section={item.section}
      author={item.byline}
      url={item.url}
      // src={item.uri}
    />
  );

  useEffect(() => {
    getNewsList().then(res => setList(res));
  }, []);

  return (
    <View>
      <FlatList data={list} renderItem={renderItems} />
    </View>
  );
};

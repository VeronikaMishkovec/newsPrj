import React, { FC } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { Link } from '../Link';

import { styles } from './styles';
import { NewsCardTypes } from './types';

export const NewsCardView: FC<NewsCardTypes> = props => {
  const { author, published_date, section, src, subtitle, title, url } = props;

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: src }} style={styles.image}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.info}>
          <Text style={styles.text}>{published_date}</Text>
          <Text style={styles.text}>{section}</Text>
        </View>
        <Text style={styles.text}>{author}</Text>
      </View>
      <Link url={url}>{'Read more'}</Link>
    </View>
  );
};

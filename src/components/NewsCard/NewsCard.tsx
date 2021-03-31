import React, { FC, useCallback } from 'react';
import {
  Alert,
  Button,
  ImageBackground,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import momemt from 'moment';

import { TNewsCard } from './NewsCardTypes';
import { styles } from './NewsCardStyles';

export const NewsItem: FC<TNewsCard> = props => {
  const { title, src, subtitle, published_date, section, author, url } = props;

  const date = momemt(published_date).format('DD.MM.YYYY');

  const OpenURLButton = ({ url, children }: any) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    // return <Button color="#3d6c6f" title={children} onPress={handlePress} />;
    return (
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: src }} style={styles.image}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.info}>
          <Text style={styles.text}>{date}</Text>
          <Text style={styles.text}>{section}</Text>
        </View>
        <Text style={styles.text}>{author}</Text>
      </View>
      <OpenURLButton url={url}>Read more</OpenURLButton>
    </View>
  );
};

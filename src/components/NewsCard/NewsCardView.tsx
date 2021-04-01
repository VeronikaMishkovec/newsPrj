import React, { FC, useCallback } from 'react';
import {
  Linking,
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from './styles';
import { NewsCardTypes } from './types';

export const NewsCardView: FC<NewsCardTypes> = props => {
  const { title, src, subtitle, published_date, section, author, url } = props;

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
          <Text style={styles.text}>{published_date}</Text>
          <Text style={styles.text}>{section}</Text>
        </View>
        <Text style={styles.text}>{author}</Text>
      </View>
      <OpenURLButton url={url}>Read more</OpenURLButton>
    </View>
  );
};

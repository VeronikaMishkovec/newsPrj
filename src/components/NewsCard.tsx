import React, { useCallback } from 'react';
import { Alert, Button, Linking, StyleSheet, Text, View } from 'react-native';
import momemt from 'moment';

interface Props {
  title: string;
  src?: string;
  subtitle: string;
  published_date: string;
  section: string;
  author: string;
  url: string;
}

export const NewsItem = ({
  title,
  src,
  subtitle,
  published_date,
  section,
  author,
  url,
}: Props) => {
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

    return <Button color="#3d6c6f" title={children} onPress={handlePress} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#72a2ac',
    paddingBottom: 10,
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  title: {
    color: '#3d6c6f',
    borderStyle: 'solid',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 18,
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  info: {
    fontSize: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#72a2ac',
    marginBottom: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#72a2ac',
  },
});

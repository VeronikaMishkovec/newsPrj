import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
  title: string;
  src?: string;
  subtitle: string;
  published_date: string;
  section: string;
  author: string;
}

export const NewsItem = ({
  title,
  src,
  subtitle,
  published_date,
  section,
  author,
}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: src }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.info}>
          <Text style={styles.text}>{published_date}</Text>
          <Text style={styles.text}>{section}</Text>
        </View>
        <Text style={styles.text}>{author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#72a2ac',
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
});

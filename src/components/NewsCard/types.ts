import { TextStyle } from 'react-native';

export type NewsCardTypes = {
  title: string;
  subtitle: string;
  published_date: string;
  section: string;
  author: string;
  url: string;

  src?: string;
};

export type NewsCardStylesTypes = {
  container: TextStyle;
  textContainer: TextStyle;
  title: TextStyle;
  subtitle: TextStyle;
  info: TextStyle;
  text: TextStyle;
  image: TextStyle;
  button: TextStyle;
  buttonText: TextStyle;
};

import { TextStyle } from 'react-native';

export type TNewsCard = {
  title: string;
  src?: string;
  subtitle: string;
  published_date: string;
  section: string;
  author: string;
  url: string;
};

export type TNewsCardStyles = {
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

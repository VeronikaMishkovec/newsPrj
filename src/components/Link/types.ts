import { TextStyle } from 'react-native';

export type LinkTypes = {
  url: string;
};

export type LinkStylesTypes = {
  button: TextStyle;
  buttonText: TextStyle;
};

export type LinkViewTypes = {
  children: React.ReactNode;
  handlePress: () => void;
};

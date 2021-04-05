import { TextStyle } from 'react-native';

export type LinkStylesTypes = {
  button: TextStyle;
  buttonText: TextStyle;
};

export type LinkTypes = {
  url: string;
};

export type LinkViewTypes = {
  children: React.ReactNode;
  handlePress: () => void;
};

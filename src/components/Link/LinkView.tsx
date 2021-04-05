import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { LinkViewTypes } from './types';

export const LinkView: FC<LinkViewTypes> = props => {
  const { children, handlePress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

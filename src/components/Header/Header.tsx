import React, { FC } from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

export const Header: FC = () => {
  return <Text style={styles.header}>{'Most Popular News'}</Text>;
};




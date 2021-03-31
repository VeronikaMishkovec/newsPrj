import React, { FC } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

import { styles } from './HeaderStyles';

export const Header: FC = () => {
  return <Text style={styles.header}>{'Most Popular News'}</Text>;
};




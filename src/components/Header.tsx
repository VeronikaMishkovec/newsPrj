import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const Header = () => {
  return <Text style={styles.header}>Most Popular News</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from './src/components/Header';
import { NewsList } from './src/components/NewsList';

const App = () => {
  
  return (
    <View style={styles.container}>
      <Header />
      <NewsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 100,
    marginHorizontal: 15,
  }
})

export default App;

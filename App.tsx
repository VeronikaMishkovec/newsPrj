import React from 'react';
import { SafeAreaView } from 'react-native';

import { Header } from './src/components/Header/Header';
import { NewsList } from './src/components/NewsList/NewsList';

import { styles } from './AppStyles'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <NewsList />
    </SafeAreaView>
  );
};

export default App;

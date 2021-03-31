import React from 'react';
import { SafeAreaView } from 'react-native';
// import { Provider } from 'redux';

import { Header } from './src/components/Header/Header';
import { NewsList } from './src/components/NewsList/NewsList';

import { styles } from './AppStyles';

const App = () => {
  return (
    // <Provider>
      <SafeAreaView style={styles.container}>
        <Header />
        <NewsList />
      </SafeAreaView>
    // </Provider>
  );
};

export default App;

import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import { Header } from './src/components/Header';
import { NewsList } from './src/components/NewsList';
import { store } from './src/store/store';

import { styles } from './styles';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header />
        <NewsList />
      </SafeAreaView>
    </Provider>
  );
};

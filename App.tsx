import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { Header } from './src/components/Header';
import { NewsList } from './src/components/NewsList';
import { store } from './src/store/store';

import { styles } from './styles';

export const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header />
        <NewsList />
      </SafeAreaView>
    </Provider>
  );
};

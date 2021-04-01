import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { Header } from './src/components/Header';
import { NewsList } from './src/components/NewsList/NewsList';
import { rootReducer } from './src/store/reducers/rootReducer';

import { styles } from './styles';

const App = () => {
  const saga = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(saga));
  
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header />
        <NewsList />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

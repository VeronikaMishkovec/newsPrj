import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { Header } from './src/components/Header';
import { NewsList } from './src/components/NewsList';
import { rootReducer } from './src/store/reducers/rootReducer';
import rootSaga from './src/store/saga/rootSaga';

import { styles } from './styles';

const App = () => {
  const saga = createSagaMiddleware();
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));

  saga.run(rootSaga);

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

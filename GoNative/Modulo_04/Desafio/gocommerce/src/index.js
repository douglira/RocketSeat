import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import 'config/reactotron';

import { store, persistor } from 'store';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </PersistGate>
  </Provider>
);

export default App;

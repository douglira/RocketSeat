import React from 'react';
import { Provider } from 'react-redux';
import 'config/reactotron';
import 'styles/global';

import store from 'store';

import Main from 'pages/Main';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;

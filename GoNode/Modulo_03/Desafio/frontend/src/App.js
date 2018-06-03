import React from 'react';
import { Provider } from 'react-redux';
import 'styles/global';

import 'config/reactotron';
import Routes from 'routes';
import store from 'store';

const App = () => (
  <div>
    <Provider store={store}>
      <Routes />
    </Provider>
  </div>
);

export default App;

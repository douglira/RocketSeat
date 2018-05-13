import React from 'react';
import { Provider } from 'react-redux';

import 'config/ReactotronConfig';

import store from 'store';

import Map from 'screen/Map';

const App = () => (
  <Provider store={store}>
    <Map />
  </Provider>
);

export default App;

import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import 'styles/global';

import Notification from 'components/Notification';

import 'config/reactotron';
import Routes from 'routes';
import store from 'store';

const App = () => (
  <div>
    <Provider store={store}>
      <Fragment>
        <Notification />
        <Routes />
      </Fragment>
    </Provider>
  </div>
);

export default App;

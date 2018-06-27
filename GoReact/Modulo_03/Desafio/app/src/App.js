import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'config/reactotron';
import 'styles/global';

import store from 'store';

import Main from 'pages/Main';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <ToastContainer autoClose={3500} />
      <Main />
    </Fragment>
  </Provider>
);

export default App;

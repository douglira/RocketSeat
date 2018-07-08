import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'config/reactotron';
import 'styles/global';

import store from 'store';

import Routes from 'routes';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Player from 'components/Player';

import { Wrapper, Container, Content } from 'styles/components';

const App = () => (
  <Provider store={store}>
    <Router>
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </Router>
  </Provider>
);

export default App;

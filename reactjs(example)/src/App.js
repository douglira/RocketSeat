import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { ToastContainer } from 'react-toastify';

import '~/config/reactotron';
import '~/styles/global';

import { Wrapper, Container, Content } from './styles/components';

import Header from '~/components/Header';

import store from '~/store';
import Routes from '~/routes';
import { colors } from '~/styles';

const App = () => (
  <ThemeProvider theme={colors}>
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <ToastContainer />
          <Container>
            <Content>
              <Routes />
            </Content>
          </Container>
        </Wrapper>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

export default App;

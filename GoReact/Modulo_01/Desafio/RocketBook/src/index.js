import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header';

import './style.scss';

const App = () => (
  <div className="container">
    <Header />
  </div>
);

render(<App />, document.getElementById('app'));

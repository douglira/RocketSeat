import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import './styles.scss';

import Button from './Button';

class App extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <h1 className="title">Hello Rocketseat</h1>
        <h2 style={{ color: '#FF2332' }}>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));

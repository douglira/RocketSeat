import React, { Component } from 'react';

import { Container, Animations } from './styles';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      text: '',
      scaleOutAnimation: {},
    };
  }

  show = (text) => {
    this.setState({
      text,
      visible: true,
    });

    setTimeout(() => {
      this.setState({
        visible: false,
        scaleOutAnimation: {
          animation: `${Animations.scaleOut} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both`,
        },
      });
    }, 3000);
  };

  render() {
    return (
      <Container
        style={
          this.state.visible
            ? { opacity: 0.75, animation: `${Animations.bounceIn} 1.1s both` }
            : {
                opacity: 0,
                ...this.state.scaleOutAnimation,
              }
        }
      >
        <p>{this.state.text}</p>
      </Container>
    );
  }
}

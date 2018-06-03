import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Container, Animations } from './styles';

const Notification = ({ notification }) => (
  <Container
    style={
      notification.visible
        ? { opacity: 0.75, animation: `${Animations.bounceIn} 1.1s both` }
        : {
            opacity: 0,
            animation: notification.text
              ? `${Animations.scaleOut} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both`
              : '',
          }
    }
  >
    <p>{notification.text}</p>
  </Container>
);

Notification.propTypes = {
  notification: PropTypes.shape({
    text: PropTypes.string,
    visible: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = ({ notification }) => ({
  notification,
});

export default connect(mapStateToProps)(Notification);

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Creators as ToastActions } from 'store/ducks/toast';

import styles from './styles';

class Toast extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    reset: PropTypes.func.isRequired,
  };

  componentDidUpdate() {
    const { reset } = this.props;
    setTimeout(() => {
      reset();
    }, 3000);
  }

  topicStyle = () => {
    const { topic } = this.props;

    switch (topic) {
      case 'info':
        return styles.info;
      case 'error':
        return styles.error;
      default:
        return styles.info;
    }
  };

  render() {
    const { text } = this.props;

    if (!text) {
      return null;
    }

    return (
      <View style={styles.container}>
        <View style={[styles.content, this.topicStyle()]}>
          <Text style={styles.text}>
            {text}
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ toast }) => ({
  ...toast,
});

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(ToastActions.reset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toast);

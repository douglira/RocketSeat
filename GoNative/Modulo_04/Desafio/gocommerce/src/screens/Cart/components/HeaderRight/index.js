import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Creators as CartActions } from 'store/ducks/cart';

import styles from './styles';

const HeaderRight = ({ clearCart }) => (
  <TouchableOpacity onPress={clearCart}>
    <Text style={styles.button}>
LIMPAR
    </Text>
  </TouchableOpacity>
);

HeaderRight.propTypes = {
  clearCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(CartActions.clear()),
});

export default connect(
  null,
  mapDispatchToProps,
)(HeaderRight);

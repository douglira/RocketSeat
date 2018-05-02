import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const TabTitle = ({ title, focused }) =>
  <Text style={[styles.title, { fontWeight: focused ? 'bold' : 'normal' }]}>{title}</Text>;

TabTitle.propTypes = {
  title: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};

export default TabTitle;

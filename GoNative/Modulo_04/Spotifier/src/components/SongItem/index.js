import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import styles from './styles';

const SongItem = ({ song }) => (
  <TouchableOpacity onPress={() => {}}>
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.author}>{song.author}</Text>
      </View>
      <Icon name="play-circle-outline" size={24} style={styles.play} />
    </View>
  </TouchableOpacity>
);

SongItem.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default SongItem;

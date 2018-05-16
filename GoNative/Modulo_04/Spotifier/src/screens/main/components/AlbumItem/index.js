import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import styles from './styles';

const AlbumItem = ({ album, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Image style={styles.thumbnail} source={{ uri: album.thumbnail }} />
    <View style={styles.info}>
      <Text style={styles.title}>{album.title}</Text>
      <Text style={styles.author}>{album.author}</Text>
    </View>
    <Icon name="more-horiz" size={24} style={styles.more} />
  </TouchableOpacity>
);

AlbumItem.propTypes = {
  album: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default AlbumItem;

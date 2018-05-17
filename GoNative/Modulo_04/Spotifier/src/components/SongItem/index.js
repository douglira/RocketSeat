import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { Creators as PlayerActions } from 'store/ducks/player';

import styles from './styles';

const SongItem = ({ song, setSongRequest }) => (
  <TouchableOpacity
    onPress={() => {
      setSongRequest(song);
    }}
  >
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
  setSongRequest: PropTypes.func.isRequired,
};

const mapStateToProps = ({ player }) => ({
  player,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SongItem);

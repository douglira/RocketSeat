import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const currentSong = {
  title: 'Papercut',
  author: 'Linkin Park',
};

const Player = () => (
  <View style={styles.container}>
    <View style={styles.currentSong}>
      <Text style={styles.title}>{currentSong.title}</Text>
      <Text style={styles.author}>{currentSong.author}</Text>
    </View>

    <View style={styles.controls}>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="skip-previous" size={24} style={styles.controlIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.play} onPress={() => {}}>
        <Icon name="play-circle-filled" size={24} style={styles.controlIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="skip-next" size={24} style={styles.controlIcon} />
      </TouchableOpacity>
    </View>
  </View>
);

export default Player;

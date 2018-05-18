import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import PropTypes from 'prop-types';

import SongList from 'components/SongList';

import styles from './styles';

const Album = ({ navigation }) => {
  const album = navigation.getParam('album');

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.thumbnail} source={{ uri: album.thumbnail }} blurRadius={4}>
        <View style={styles.thumbnailContainer}>
          <Text style={styles.title}>{album.title}</Text>
          <Text style={styles.author}>{album.author}</Text>
        </View>
      </ImageBackground>

      <SongList data={album.songs} />
    </View>
  );
};

Album.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.album.title,
});

Album.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

export default Album;

import React from 'react';
import { View, ImageBackground, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import SongItem from 'components/SongItem';

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

      <FlatList
        data={album.songs}
        keyExtractor={song => String(song.id)}
        renderItem={({ item }) => <SongItem song={item} />}
      />
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

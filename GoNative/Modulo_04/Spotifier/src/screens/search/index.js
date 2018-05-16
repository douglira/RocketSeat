import React from 'react';

import { View, TextInput, FlatList } from 'react-native';

import SongItem from 'components/SongItem';

import styles from './styles';

const server = require('../../../server.json');

const Search = () => (
  <View style={styles.container}>
    <View style={styles.form}>
      <TextInput
        style={styles.searchInput}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Buscar por músicas..."
        placeholderTextColor="#666"
        underlineColorAndroid="transparent"
      />
    </View>

    <FlatList
      data={server.songs}
      keyExtractor={song => String(song.id)}
      renderItem={({ item }) => <SongItem song={item} />}
    />
  </View>
);

export default Search;

import React from 'react';

import { View, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

import AlbumItem from './components/AlbumItem';

import server from '../../../server.json';

const Main = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />

    <FlatList
      data={server.albums}
      keyExtractor={album => String(album.id)}
      renderItem={({ item }) => <AlbumItem album={item} />}
    />
  </View>
);

Main.navigationOptions = ({ navigation }) => ({
  title: 'Sua biblioteca',
  headerRight: (
    <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('Search')}>
      <Icon name="search" size={24} color="#FFF" />
    </TouchableOpacity>
  ),
});

export default Main;

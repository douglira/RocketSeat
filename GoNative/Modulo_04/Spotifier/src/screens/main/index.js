import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, StatusBar, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { Creators as AlbumsActions } from 'store/ducks/albums';

import styles from './styles';

import AlbumItem from './components/AlbumItem';

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sua Biblioteca',
    headerRight: (
      <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('Search')}>
        <Icon name="search" size={24} color="#FFF" />
      </TouchableOpacity>
    ),
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    getAlbumsRequest: PropTypes.func.isRequired,
    albums: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
    }).isRequired,
  };

  componentDidMount() {
    this.props.getAlbumsRequest();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        {this.props.albums.loading ? (
          <ActivityIndicator size="small" color="#999" style={styles.loading} />
        ) : (
          <FlatList
            data={this.props.albums.data}
            keyExtractor={album => String(album.id)}
            renderItem={({ item }) => (
              <AlbumItem
                onPress={() => this.props.navigation.navigate('Album', { album: item })}
                album={item}
              />
            )}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ albums }) => ({
  albums,
});

const mapDispatchToProps = dispatch => bindActionCreators(AlbumsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);

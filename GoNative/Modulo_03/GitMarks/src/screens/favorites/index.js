import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FavoriteItem from './components/FavoriteItem';

import styles from './styles';

class Favorites extends Component {
  static navigationOptions = {
    title: 'Meus favoritos',
  }

  static propTypes = {
    favorites: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
    }).isRequired,
  }

  renderList = () => (
    <FlatList
      data={this.props.favorites.data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <FavoriteItem favorite={item} />}
    />
  )

  render() {
    return (
      <View style={styles.container} >
        { !this.props.favorites.data.length
          ? <Text style={styles.empty}>Nenhum favorito adicionado</Text>
          : this.renderList() }
      </View>
    );
  }
}

const mapStateToProps = ({ favorites }) => ({
  favorites,
});

export default connect(mapStateToProps)(Favorites);

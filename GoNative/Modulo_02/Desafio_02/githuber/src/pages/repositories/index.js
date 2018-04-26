import React, { Component } from 'react';
import { View, Text, AsyncStorage, ActivityIndicator, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from 'services/axios';

import RepositoryItem from './components/RepositoryItem';

import styles from './styles';

class Repositories extends Component {
  static navigationOptions = {
    title: 'Repositórios',
    tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadingRepositories();
  }

  loadingRepositories = async () => {
    this.setState({ refreshing: true });

    const username = await AsyncStorage.getItem('@Githuber:username');
    const response = await api.get(`/users/${username}/repos`);

    this.setState({
      data: response.data,
      loading: false,
      refreshing: false,
    });
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.loadingRepositories}
      refreshing={this.state.refreshing}
    />
  );

  render() {
    return (
      <View sytle={styles.container}>
        { this.state.loading
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList() }
      </View>
    );
  }
}

export default Repositories;

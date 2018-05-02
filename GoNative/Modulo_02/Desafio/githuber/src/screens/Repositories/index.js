import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import api from 'services/axios';

import { colors } from 'styles';
import styles from './styles';

import RepositoryItem from './components/RepositoryItem';

class Lista extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
  }

  static navigationOptions = {
    title: 'GitIssues',
  };

  state = {
    searchText: '',
    data: [],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    let data = await AsyncStorage.getItem('@Githuber:repos');
    data = JSON.parse(data);

    this.setState({
      data: data.reverse(),
      loading: false,
      refreshing: false,
    });
  };

  addRepository = async () => {
    const response = await api.get(`/repos/${this.state.searchText}`);
    const { data } = response;

    if (response.status !== 200) return;

    let repos = await AsyncStorage.getItem('@Githuber:repos');
    repos = JSON.parse(repos);

    if (repos && repos.length > 0) {
      repos.push({
        id: data.id,
        name: data.name,
        organization: data.organization.login,
        avatar: data.organization.avatar_url,
      });

      await AsyncStorage.setItem('@Githuber:repos', JSON.stringify(repos));
      this.setState({ searchText: '' });
      this.loadRepositories();
      return;
    }

    await AsyncStorage.setItem(
      '@Githuber:repos',
      JSON.stringify([
        {
          id: data.id,
          name: data.name,
          organization: data.organization.login,
          avatar: data.organization.avatar_url,
        },
      ]),
    );
    this.loadRepositories();
    this.setState({ searchText: '' });
  };

  renderListItem = ({ item }) =>
    <RepositoryItem repository={item} navigation={this.props.navigation} />;

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.loadRepositories}
      refreshing={this.state.refreshing}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Adicionar novo repositório"
            onChangeText={searchText => this.setState({ searchText })}
            value={this.state.searchText}
          />
          <TouchableOpacity onPress={this.addRepository} style={styles.iconContainer}>
            <Icon name="plus" size={16} color={colors.darker} />
          </TouchableOpacity>
        </View>
        {this.state.loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}

export default Lista;

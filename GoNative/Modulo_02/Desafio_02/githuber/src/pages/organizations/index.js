import React, { Component } from 'react';
import { View, Text, AsyncStorage, ActivityIndicator, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import OrganizationItem from './components/OrganizationItem';

import styles from './styles';

import api from 'services/axios';

class Organizations extends Component {
  static navigationOptions = {
    title: 'Organizações',
    tabBarIcon: ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />,
  }

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    this.setState({ refreshing: true });

    const username = await AsyncStorage.getItem('@Githuber:username');
    const response = await api.get(`/users/${username}/orgs`);

    this.setState({
      data: response.data,
      loading: false,
      refreshing: false,
    });
  };

  renderListItem = ({ item }) => <OrganizationItem organization={item} />

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      numColumns={2}
      columnWrapperStyle={styles.columnContainer}
      onRefresh={this.loadOrganizations}
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

export default Organizations;

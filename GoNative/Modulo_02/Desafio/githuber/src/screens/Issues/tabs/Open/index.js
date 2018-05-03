import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, Linking } from 'react-native';
import PropTypes from 'prop-types';

import TabTitle from 'components/TabTitle';
import CardInfo from 'components/CardInfo';

import api from 'services/axios';
import styles from './styles';

class Open extends Component {
  static navigationOptions = {
    tabBarLabel: ({ focused }) => <TabTitle title="Abertas" focused={focused} />,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.object,
      }).isRequired,
    }).isRequired,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    this.setState({ refreshing: true });

    const { name, organization } = this.props.navigation.state.params;
    const response = await api.get(`/repos/${organization}/${name}/issues`);

    response.data = response.data.filter(issue => issue.state === 'open');
    const data = response.data.map(issue => ({
      id: issue.id,
      title: issue.title,
      user: issue.user.login,
      avatar: issue.user.avatar_url,
      url: issue.html_url,
    }));

    this.setState({ data, loading: false, refreshing: false });
  };

  renderListItem = ({ item }) =>
    (<CardInfo
      title={item.title}
      subtitle={item.user}
      avatar={item.avatar}
      onPress={() => Linking.openURL(item.url)}
    />)

  renderList = () => (
    this.state.data.length > 0
      ? <FlatList
        data={this.state.data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadIssues}
        refreshing={this.state.refreshing}
      />
      : <Text style={styles.emptyText}>Não há issues abertas a serem exibidas.</Text>
  );

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}

export default Open;

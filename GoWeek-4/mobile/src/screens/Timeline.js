import React, { Component } from 'react';
import api from '../services/api';
import socket from 'socket.io-client';

import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Tweet from '../components/Tweet';

export default class Timeline extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Início',
    headerRight: (
      <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate("New")}>
        <Icon name="add-circle-outline" size={24} color="#4BB0EE" />
      </TouchableOpacity>
    )
  })

  state = {
    tweets: [],
    refreshing: false,
  }
  
  async componentDidMount() {
    this.subscribeToEvents();
    await this.fetchTweets()
  }

  fetchTweets = async () => {
    const response = await api.get('tweets');
    this.setState({ tweets: response.data });
  }

  subscribeToEvents = () => {
    const io = socket('http://127.0.0.1:3000');

    io.on('tweet', data => {
      this.setState({ tweets: [data, ...this.state.tweets] });
    });

    io.on('like', data => {
      this.setState({ tweets: this.state.tweets.map(tweet => 
        tweet._id === data._id ? data : tweet) })
    })
  }
  
  render() {
    return (
      <View styles={styles.container}>
        <FlatList
          data={this.state.tweets}
          keyExtractor={tweet => tweet._id}
          renderItem={({ item }) => <Tweet tweet={item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});

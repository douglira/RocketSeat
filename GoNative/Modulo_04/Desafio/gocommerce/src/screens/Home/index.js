import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={26} color={tintColor} />,
  };

  render() {
    return (
      <View>
        <Text>
HomeScreen
        </Text>
      </View>
    );
  }
}

export default Home;

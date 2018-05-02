import React, { Component } from 'react';
import { View, Text } from 'react-native';

class All extends Component {
  static navigationOptions = {
    tabBarLabel: 'Todas',
  }

  render() {
    return (
      <View>
        <Text>All issues...</Text>
      </View>
    );
  }
}

export default All;

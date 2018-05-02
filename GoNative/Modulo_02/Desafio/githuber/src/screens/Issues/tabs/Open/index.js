import React, { Component } from 'react';
import { View, Text } from 'react-native';

import TabTitle from 'components/TabTitle';

class Open extends Component {
  static navigationOptions = {
    tabBarLabel: ({ focused }) => <TabTitle title="Abertas" focused={focused} />,
  };

  render() {
    return (
      <View>
        <Text>Open issues...</Text>
      </View>
    );
  }
}

export default Open;

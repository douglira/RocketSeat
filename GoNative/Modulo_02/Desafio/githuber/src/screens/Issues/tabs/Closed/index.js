import React, { Component } from 'react';
import { View, Text } from 'react-native';

import TabTitle from 'components/TabTitle';

class Closed extends Component {
  static navigationOptions = {
    tabBarLabel: ({ focused }) => <TabTitle title="Fechadas" focused={focused} />,
  };

  render() {
    return (
      <View>
        <Text>Closed issues...</Text>
      </View>
    );
  }
}

export default Closed;

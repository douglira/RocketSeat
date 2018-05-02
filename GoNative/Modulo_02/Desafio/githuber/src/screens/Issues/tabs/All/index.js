import React, { Component } from 'react';
import { View, Text } from 'react-native';

import TabTitle from 'components/TabTitle';

class All extends Component {
  static navigationOptions = {
    tabBarLabel: ({ focused }) => <TabTitle title="Todas" focused={focused} />,
  };

  render() {
    return (
      <View>
        <Text>All issues...</Text>
      </View>
    );
  }
}

export default All;

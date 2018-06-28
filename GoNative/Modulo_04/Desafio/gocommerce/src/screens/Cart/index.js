import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Cart extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" size={26} color={tintColor} />,
  };

  render() {
    return (
      <View>
        <Text>
CartScreen
        </Text>
      </View>
    );
  }
}

export default Cart;

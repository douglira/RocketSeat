import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default class Profile extends Component {
  static navigationOptions = {
    title: 'Perfil'
  }
  
  render() {
    return (
      <View>
        <Text> Customize o seu perfil </Text>
      </View>
    );
  }
}

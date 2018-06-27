import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
Welcome to React Native!
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;

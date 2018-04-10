import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.postTitle}>{this.props.post.title}</Text>
        <Text style={styles.postDescription}>
          {this.props.post.description}
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 3,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  postDescription: {
    marginTop: 10
  }
})

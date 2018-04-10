import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

import Post from './components/post'

export default class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      posts: []
    }
  }

  static navigationOptions = {
    title: 'Posts'
  }

  publish = () => {
    this.setState({ posts: [...this.state.posts, { title: this.state.title, description: this.state.description }] })
  }

  publishView = () => {
    let i = 1
    return this.state.posts.map(p => {
      return <Post key={i++} post={p} />
    })
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => navigate('Profile')} style={styles.profileButton}>
          <Text style={styles.profileButtonText}>Meu Perfil</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.postInput}
          placeholder="Título do post..."
          onChangeText={title => this.setState({ title })}
        />
        <TextInput
          multiline={true}
          numberOfLines={5}
          placeholder="Decrição"
          onChangeText={description => this.setState({ description })}
        />
        <TouchableOpacity onPress={this.publish} style={styles.publishButton}>
          <Text style={styles.profileButtonText}>Postar</Text>
        </TouchableOpacity>
        {this.publishView()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#FFF'
  },
  profileButton: {
    flex: 1,
    backgroundColor: '#FF5722',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10
  },
  publishButton: {
    flex: 1,
    backgroundColor: '#069',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10
  },
  profileButtonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold'
  },
  postInput: {
    padding: 10,
    fontSize: 16
  }
})

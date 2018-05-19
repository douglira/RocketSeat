import React, { Component } from "react";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

class Input extends Component {
  state = {
    text: ""
  };

  handleAddMessage = async () => {
    const { text } = this.state;
    const { author } = this.props;

    if (text.length > 0) {
      const newMessage = this.props.addMessage({ author, text });
    }

    this.setState({ text: "" });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />
        <TouchableOpacity onPress={this.handleAddMessage}>
          <Text style={styles.button}>Enviar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 42,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#FAFAFA",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#CCC",
    flexDirection: "row",
    alignItems: "center"
  },

  input: {
    flex: 1,
    height: 30,
    paddingHorizontal: 10,
    paddingVertical: 0,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12
  },

  button: {
    marginLeft: 10,
    color: "#358CFF",
    fontWeight: "bold"
  }
});

const MessageMutation = gql`
  mutation($author: String!, $text: String!) {
    createMessage(from: $author, text: $text) {
      id
      from
      text
    }
  }
`;

export default graphql(MessageMutation, {
  props: ({ ownProps, mutate }) => ({
    addMessage: ({ author, text }) =>
      mutate({
        variables: { author, text },
        update: ownProps.onAddMessage
      })
  })
})(Input);

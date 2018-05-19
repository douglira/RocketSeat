import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  ActivityIndicator
} from "react-native";

import Input from "./components/Input";

StatusBar.setBarStyle("light-content");

const author = "Douglas Lira";

class Chat extends Component {
  componentDidUpdate() {
    setTimeout(() => {
      this._scrollView.scrollToEnd({ animated: false });
    }, 0);
  }

  handleAddMessage = (proxy, { data: { createMessage } }) => {
    const data = proxy.readQuery({
      query: ConversationQuery
    });

    data.allMessages.push(createMessage);

    proxy.writeQuery({
      query: ConversationQuery,
      data
    });
  };

  renderChat = () =>
    this.props.conversation.allMessages.map(message => (
      <View
        key={message.id}
        style={[
          styles.bubble,
          message.from === author
            ? styles["bubble-right"]
            : styles["bubble-left"]
        ]}
      >
        <Text style={styles.author}>{message.from}</Text>
        <Text style={styles.message}>{message.text}</Text>
      </View>
    ));

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <ScrollView
          contentContainerStyle={styles.conversation}
          keyboardShouldPersistTaps="never"
          ref={scrollView => (this._scrollView = scrollView)}
        >
          {this.props.conversation.loading ? (
            <ActivityIndicator style={styles.loading} color="#FFF" />
          ) : (
            this.renderChat()
          )}
        </ScrollView>

        <Input author={author} onAddMessage={this.handleAddMessage} />
      </KeyboardAvoidingView>
    );
  }
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C4241",
    ...Platform.select({
      ios: { paddingTop: 20 }
    })
  },

  conversation: {
    padding: 10
  },

  loading: {
    marginTop: 20
  },

  bubble: {
    padding: 6,
    backgroundColor: "#F5F5F5",
    borderRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    shadowRadius: 0,
    marginTop: 10,
    maxWidth: width - 60,
    elevation: 2
  },

  "bubble-left": {
    alignSelf: "flex-start"
  },

  "bubble-right": {
    alignSelf: "flex-end",
    backgroundColor: "#D1EDC1"
  },

  author: {
    fontWeight: "bold",
    marginBottom: 3,
    color: "#333"
  },

  message: {
    fontSize: 16,
    color: "#333"
  }
});

const ConversationQuery = gql`
  query {
    allMessages(orderBy: createdAt_ASC) {
      id
      from
      text
    }
  }
`;

export default graphql(ConversationQuery, {
  name: "conversation"
})(Chat);

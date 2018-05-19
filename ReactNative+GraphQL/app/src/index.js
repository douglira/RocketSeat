import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";

import client from "./apollo/client";

import Chat from "./screens/Chat";

const App = () => (
  <ApolloProvider client={client}>
    <Chat />
  </ApolloProvider>
);

export default App;

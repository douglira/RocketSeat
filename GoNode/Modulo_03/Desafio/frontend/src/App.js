import React, { Component } from "react";
import io from "socket.io-client";

class App extends Component {
  componentDidMount() {
    const socket = io("http://127.0.0.1:3001");
  }

  render() {
    return (
      <div>
        <p>Bem vindo ao Facerocket</p>
      </div>
    );
  }
}

export default App;

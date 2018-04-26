import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import 'config/ReactotronConfig';

import createNavigator from 'routes';

class App extends Component {
  state = {
    userCheck: false,
    userLogged: false,
  }

  async componentDidMount() {
    // await AsyncStorage.clear();
    const username = await AsyncStorage.getItem('@Githuber:username');

    this.appLoaded(username);
  }

  appLoaded = (username) => {
    this.setState({
      userCheck: true,
      userLogged: !!username,
    });
  }

  render() {
    if (!this.state.userCheck) return null;

    const Routes = createNavigator(this.state.userLogged);
    return <Routes />;
  }
}

export default App;

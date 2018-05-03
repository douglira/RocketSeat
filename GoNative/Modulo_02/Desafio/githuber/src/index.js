import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import 'config/ReactotronConfig';

import appNavigator from 'routes';

class App extends Component {
  state = {
    filterHistory: 'All',
  };

  componentDidMount() {
    this.setFilterHistory();
  }

  setFilterHistory = async () => {
    const filterHistory = await AsyncStorage.getItem('@Githuber:filterHistory');
    if (filterHistory) {
      this.setState({ filterHistory });
    }
  };

  render() {
    const Routes = appNavigator(this.state.filterHistory);

    return <Routes />;
  }
}

export default App;

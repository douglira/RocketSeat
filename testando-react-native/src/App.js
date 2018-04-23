import { StackNavigator, TabNavigator } from 'react-navigation';
import React from 'react';
import {View, Text} from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <Text style={{
        fontSize: 42, 
        height: 150,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'darkblue', 
        color: '#FFF'
      }}>Vocalize</Text>
    )
  }
}

const AuthStack = TabNavigator(
  { 
    Posts: { screen: Posts },
    Profile: { screen: Profile },
  },
  {
    tabBarOptions: {
      indicatorStyle:{
        backgroundColor: 'purple'
      },
      style: {
        backgroundColor: 'darkblue'
      }
    }
  }
)

const App = StackNavigator({
  AuthStack: {
    screen: AuthStack, 
    navigationOptions: { 
      header: (<Header/>)
    }
 }
})

import Posts from './screens/posts';
import Profile from './screens/profile';

export default App;

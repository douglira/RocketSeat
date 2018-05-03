import { StackNavigator, TabNavigator } from 'react-navigation';
import { AsyncStorage } from 'react-native';

import Repositories from 'screens/Repositories';
import All from 'screens/Issues/tabs/All';
import Open from 'screens/Issues/tabs/Open';
import Closed from 'screens/Issues/tabs/Closed';

import { colors, metrics } from './styles';

const appNavigator = filterHistory => StackNavigator(
  {
    Repositories: { screen: Repositories },
    Issues: TabNavigator(
      {
        All: { screen: All },
        Open: { screen: Open },
        Closed: { screen: Closed },
      },
      {
        initialRouteName: filterHistory,
        tabBarOptions: {
          upperCaseLabel: false,
          inactiveTintColor: colors.whiteTransparent,
          indicatorStyle: {
            backgroundColor: colors.light,
          },
          style: {
            backgroundColor: colors.light,
            margin: metrics.baseMargin * 2,
            borderRadius: metrics.baseRadius,
            paddingVertical: metrics.basePadding / 20,
          },
          labelStyle: {
            color: colors.dark,
          },
        },
      },
    ),
  },
  {
    navigationOptions: ({ navigation }) => {
      let name = 'GitIssues';
      if (navigation.state.params) {
        ({ name } = navigation.state.params);
      }

      if (navigation.state.routes && navigation.state.routes.length > 0) {
        const { index } = navigation.state;
        const { routeName } = navigation.state.routes[index];
        AsyncStorage.setItem('@Githuber:filterHistory', routeName);
      }

      return {
        headerTitle: name,
        headerStyle: {
          backgroundColor: colors.white,
        },
        headerTitleStyle: {
          color: colors.darker,
        },
      };
    },
  },
);

export default appNavigator;

import { StackNavigator, TabNavigator } from 'react-navigation';

import Repositories from 'screens/Repositories';
import All from 'screens/Issues/tabs/All';
import Open from 'screens/Issues/tabs/Open';
import Closed from 'screens/Issues/tabs/Closed';

import { colors, metrics } from './styles';

const AppNavigator = StackNavigator(
  {
    Repositories: { screen: Repositories },
    Issues: TabNavigator(
      {
        All: { screen: All },
        Open: { screen: Open },
        Closed: { screen: Closed },
      },
      {
        initialRouteName: 'All',
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
      let title = 'GitIssues';
      if (navigation.state.params) {
        ({ title } = navigation.state.params.information);
      }

      return {
        headerTitle: title,
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

export default AppNavigator;

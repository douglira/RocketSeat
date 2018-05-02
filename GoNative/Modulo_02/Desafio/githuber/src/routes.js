import { StackNavigator, TabNavigator } from 'react-navigation';

import Repositories from 'screens/Repositories';
import All from 'screens/Issues/tabs/All';

import { colors, metrics } from './styles';

const AppNavigator = StackNavigator(
  {
    Repositories: { screen: Repositories },
    Issues: TabNavigator(
      {
        All: { screen: All },
      },
      {
        initialRouteName: 'All',
        navigationOptions: ({ navigation }) => {
          const { name } = navigation.getParam('repository');
          return {
            title: name,
          };
        },
        tabBarOptions: {
          upperCaseLabel: false,
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
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.white,
      },
      headerTitleStyle: {
        color: colors.darker,
      },
    },
  },
);

export default AppNavigator;

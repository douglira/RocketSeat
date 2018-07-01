import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from 'screens/Home';
import CartScreen from 'screens/Cart';
import HeaderRightClearCart from 'screens/Cart/components/HeaderRight';
import DetailsScreen from 'screens/Details';

import { colors } from 'styles';

const Routes = createStackNavigator(
  {
    Main: createBottomTabNavigator(
      {
        Home: HomeScreen,
        Cart: CartScreen,
      },
      {
        tabBarOptions: {
          activeTintColor: colors.primary,
          inactiveTintColor: colors.grey,
          showLabel: false,
          style: {
            height: 54,
            borderTopColor: colors.lighter,
            backgroundColor: colors.white,
          },
        },
      },
    ),
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { state } = navigation;
      let title = null;
      let headerRight = null;

      if (state.routes) {
        switch (state.routes[state.index].key) {
          case 'Cart':
            title = 'Carrinho';
            headerRight = <HeaderRightClearCart />;
            break;
          default:
            title = 'GoCommerce';
            break;
        }
      }

      return {
        title,
        headerRight,
        headerTitleStyle: {
          color: colors.primary,
          fontSize: 16,
          fontWeight: 'bold',
        },
        headerStyle: {
          height: 54,
          backgroundColor: colors.white,
        },
        headerTintColor: colors.primary,
      };
    },
  },
);

export default Routes;

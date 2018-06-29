import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from 'screens/Home';
import CartScreen from 'screens/Cart';
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
      let title;

      if (state.routes) {
        switch (state.routes[state.index].key) {
          case 'Cart':
            title = 'Carrinho';
            break;
          default:
            title = 'GoCommerce';
            break;
        }
      }

      return {
        title,
        headerTitleStyle: {
          color: colors.primary,
          fontSize: 16,
          fontWeight: 'bold',
        },
        headerStyle: {
          height: 54,
        },
        headerTintColor: colors.primary,
      };
    },
  },
);

export default Routes;

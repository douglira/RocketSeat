import { createStackNavigator } from 'react-navigation';

import { colors } from 'styles';

import Main from 'screens/main';
import Favorites from 'screens/favorites';

const Routes = createStackNavigator({
  Main: { screen: Main },
  Favorites: { screen: Favorites },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primaryDark,
    },
    headerTintColor: colors.white,
    headerBackTitle: null,
  },
});

export default Routes;

import { createStackNavigator } from 'react-navigation';
import { colors } from 'styles';

import Main from 'screens/main';
import Search from 'screens/search';
import Album from 'screens/album';

const Routes = createStackNavigator({
  Main: { screen: Main },
  Search: { screen: Search },
  Album: { screen: Album },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.secundary,
      borderBottomWidth: 0,
    },
    headerTintColor: colors.white,
    headerBackTitle: null,
  },
});

export default Routes;

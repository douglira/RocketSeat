import { createStackNavigator } from 'react-navigation';

import Login from './screens/Login';
import Timeline from './screens/Timeline';
import New from './screens/New';

const Routes = createStackNavigator({
  Login,
  Timeline,
  New,
});

export default Routes;

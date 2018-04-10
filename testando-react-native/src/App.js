import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Posts: { screen: Posts },
  Profile: { screen: Profile }
})

import Posts from './screens/posts';
import Profile from './screens/profile';

export default App;

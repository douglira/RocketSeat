import Reactotron from 'reactotron-react-native';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

if (__DEV__) {
  Reactotron
    .configure()
    .useReactNative()
    .connect()
    .clear();
}

console.tron = Reactotron;

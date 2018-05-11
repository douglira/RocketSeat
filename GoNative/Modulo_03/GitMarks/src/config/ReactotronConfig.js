import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

if (__DEV__) {
  Reactotron
    .configure()
    .useReactNative()
    .use(reactotronRedux())
    .connect()
    .clear();
}

console.tron = Reactotron;

import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  console.disableYellowBox = true;
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}

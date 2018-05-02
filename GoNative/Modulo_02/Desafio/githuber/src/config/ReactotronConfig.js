import Reactotron from 'reactotron-react-native';

console.disableYellowBox = true;

Reactotron
  .configure()
  .useReactNative()
  .connect()
  .clear();

console.tron = Reactotron;

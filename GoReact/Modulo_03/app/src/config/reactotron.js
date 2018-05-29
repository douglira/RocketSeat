import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

if (process.env.NODE_ENV === 'development') {
  Reactotron.configure()
    .use(reactotronRedux())
    .connect()
    .clear();
}

console.tron = Reactotron;

import { createStore, compose, applyMiddleware } from 'redux';

// import reducers from './reducers';

const createAppropriateStore =
  process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const store = createAppropriateStore(() => {}, compose(applyMiddleware(...[])));

export default store;

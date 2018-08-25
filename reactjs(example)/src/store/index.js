import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

import logoutMiddleware from './middlewares/user';
import toastifyMiddleware from './middlewares/toastify';

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const middlewares = [sagaMiddleware, toastifyMiddleware, logoutMiddleware];
const store = createAppropriateStore(reducers, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export default store;

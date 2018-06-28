import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './ducks';
import sagas from './sagas';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createAppropriateStore(persistedReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };

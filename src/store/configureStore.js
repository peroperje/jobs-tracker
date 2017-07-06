import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import reducers from '../reducers';
import initialStore from './initialStore';

/**
 * @description configure redux store
 * @return {Object}  redux store
 */
const configureStore = () => {

  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    initialStore,
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
    )
  );

  //Run saga
  sagaMiddleware.run(rootSaga);

  return store;

};

export default configureStore;

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/index';
import reducers from './reducers';
import initialStore from './store/initialStore';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppContainer from './components/app/AppContainer';

import injectTapEventPlugin from 'react-tap-event-plugin';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  initialStore,
  composeEnhancers(
  applyMiddleware(sagaMiddleware),
  )
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//Run saga
sagaMiddleware.run(rootSaga);
injectTapEventPlugin();
const AppThemeProvider = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <AppContainer muiTheme={getMuiTheme(darkBaseTheme)}/>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(<AppThemeProvider/>, document.getElementById('root'));


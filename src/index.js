import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/index';
import reducers from './reducers';
import initialStore from './store/initialStore';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components/app/App';

import injectTapEventPlugin from 'react-tap-event-plugin';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  initialStore,
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//Run saga
sagaMiddleware.run(rootSaga);
injectTapEventPlugin();
const AppThemeProvider = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <App muiTheme={getMuiTheme(darkBaseTheme)}/>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(<AppThemeProvider/>, document.getElementById('root'));


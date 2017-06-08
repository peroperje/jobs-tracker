import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './reducers';
import initialStore from './store/initialStore';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components/app/App';

import injectTapEventPlugin from 'react-tap-event-plugin';

const store = createStore(
  reducers,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
injectTapEventPlugin();
const AppThemeProvider = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <App muiTheme={getMuiTheme(darkBaseTheme)}/>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(<AppThemeProvider/>, document.getElementById('root'));


import React from 'react';
import {Provider} from 'react-redux';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';

import AppContainer from './AppContainer';

const propTypes = {
  store: PropTypes.object.isRequired
};

/**
 * @function Root
 * @param {Object} props properties object
 * @return {XML}
 * @constructor
 */
function Root({store}) {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <AppContainer muiTheme={getMuiTheme(darkBaseTheme)}/>
      </MuiThemeProvider>
    </Provider>
  );
}

Root.propTypes = propTypes;

export default Root;

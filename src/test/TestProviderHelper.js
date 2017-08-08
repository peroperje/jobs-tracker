import React from 'react';
import {StaticRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * @function TestProviderHelper
 * @param {Object} props The component props
 * @return {XML}
 */
function TestProviderHelper(props) {
  return (
    <MuiThemeProvider>
      <StaticRouter location="someLocation" context={{}}>
        {props.children}
      </StaticRouter>
    </MuiThemeProvider>
  );
}

export default TestProviderHelper;

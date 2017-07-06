import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  component: PropTypes.func.isRequired,
  shouldRedirect: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired
};

/**
 * @function Auth
 * @param {Object} props properties
 * @return {XML}
 * @constructor
 */
function Auth({component: Component, shouldRedirect, redirectTo, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (shouldRedirect !== true) {
          return (<Component {...props} />);
        }
        return (<Redirect to={{pathname: redirectTo, state: {from: props.location}}}/>);
        
      }}
    />

  );
}
 Auth.propTypes = propTypes;

export default Auth;

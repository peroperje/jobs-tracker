import React from 'react';
import {Route, Redirect} from 'react-router-dom';

/**
 * @function Auth
 * @param {Object} props properties
 * @return {XML}
 * @constructor
 */
function Auth({component: Component, access, redirectTo, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if(access === true){
        <Component {...props} />
      } else {
        <Redirect to={{pathname: redirectTo, state: {from: props.location}}}/>
        }
      }
    />

  );
}

export default Auth;

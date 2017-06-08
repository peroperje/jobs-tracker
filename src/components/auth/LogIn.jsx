/**
 *@namespace auth
 */

import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import InputText from './../form-utils/InputText';
import {Field, reduxForm} from 'redux-form';

/**
 * @class LogIn
 * @memberOf auth.component
 * @extends React.Component
 * @description Render component
 */
class LogIn extends Component {

  /**
   * @description render
   * @memberOf auth.LogIn
   * @return {Object} JSX HTML Content
   */
  render() {
    const style = {
      width: 400,
      height: 400,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      margin: 'auto',
      overflow: 'auto'
    };
    return (
      <Paper style={style} zDepth={5}>

      </Paper>
    );
  }
}

export default LogIn;

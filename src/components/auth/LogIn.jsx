/**
 *@namespace auth
 */

import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import validator from 'validator';

// component
import InputText from './../form-utils/InputText';

//Todo refactoring validation
const validate = values => {
  const error = {};
  const fieldToValidate = ['email', 'password'];
  fieldToValidate.forEach((key) => {
    if (!values[key]) {
      error[key] = 'Requried';
    }
  });

  if (values.email && !validator.isEmail(values.email + '')) {
    error.email = 'Email is not valid';
  }

  return error;
};

/**
 * @description Style for Login Page
 * @type {Object}
 */
const style = {
  paper: {
    width: 500,
    height: 400,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    overflow: 'auto',
    padding: '3%'
  }
};

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
    const {handleSubmit} = this.props;
    return (
      <Paper style={style.paper} zDepth={5}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(this.props.handleSubmitLogin)}>
          <div>
            <Field
              name="email"
              autoComplete="new-email"
              component={InputText}
              type="email"
              label="Email"
            />
          </div>
          <div>
            <Field
              name="password"
              autoComplete="new-password"
              component={InputText}
              type="password"
              label="password"
            />
          </div>
          <div>
            <RaisedButton label="Login" type="submit" primary={true}/>
            <div>
              <p>
                Are you new here. <Link to="signup">Create Account</Link>
              </p>
            </div>
          </div>
        </form>
      </Paper>
    );
  }
}
export default reduxForm({
  form: 'login-form',
  validate
})(LogIn);

/**
 *@namespace auth
 */

import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import validator from 'validator';
import PropTypes from 'prop-types';

// component
import InputText from './../form-utils/InputText';
import FormHeader from './../form-utils/FormHeader';

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  handleSubmitLogin: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired

};

// Todo refactoring validation
export const validate = values => {
  const error = {};
  const fieldToValidate = ['email', 'password'];
  fieldToValidate.forEach((key) => {
    if (!values[key]) {
      error[key] = 'Required';
    }
  });

  if (values.email && !validator.isEmail(`${values.email}`)) {
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
export class LogIn extends Component {

  /**
   * @description render
   * @memberOf auth.LogIn
   * @return {Object} JSX HTML Content
   */
  render() {
    const {handleSubmit, isFetching} = this.props;
    if (!isFetching) {
      return (
        <Paper style={style.paper} zDepth={5}>
          <FormHeader title="Login"/>
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
    return (
      <div style={{textAlign: 'center'}}>
        <CircularProgress size={80} thickness={5}/>
      </div>
    );
    
  }
}

LogIn.propTypes = propTypes;

export default reduxForm({
  form: 'login-form',
  validate
})(LogIn);

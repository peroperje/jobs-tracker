import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import validator from 'validator';
import PropTypes from 'prop-types';

import InputText from './../form-utils/InputText';

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleSubmitSingUp: PropTypes.func.isRequired
};

/**
 * @description The form validation
 * @param {Array} values from fields
 * @return {Object} error object
 */
export const validate = values => {
  const fieldToValidate = ['firstName', 'surName', 'email', 'password'];
  const error = fieldToValidate.reduce((e, field) => {
    if (!values[field]) {
      return {...e, ...{[field]: 'Required'}};
    }
    return e;
  }, {});

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
    height: 530,
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
 * @class SignUp
 * @extends React.Component
 * @description Render component
 */
export class SignUp extends Component {

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const {handleSubmit, isFetching} = this.props;
    if (!isFetching) {
      return (<Paper style={style.paper} zDepth={5}>
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit(this.props.handleSubmitSingUp)}>
          <div>
            <Field
              name="firstName"
              autoComplete="new-first-name"
              component={InputText}
              type="text"
              label="First Name"
            />
          </div>
          <div>
            <Field
              name="surName"
              autoComplete="new-sur-name"
              component={InputText}
              type="text"
              label="SurName"
            />
          </div>
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
              label="Password"
            />
          </div>
          <div>
            <RaisedButton label="SignUp" type="submit" primary={true}/>
            <p>Already member? <Link to="/login">Login here</Link></p>
          </div>
        </form>
      </Paper>);
    }
    return (
      <div style={{textAlign: 'center'}}>
        <CircularProgress size={80} thickness={5}/>
      </div>
    );
  }
}

SignUp.propTypes = propTypes;


export default reduxForm({
  form: 'signUp-form',
  validate
})(SignUp);

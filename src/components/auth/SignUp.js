import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import validator from 'validator';

import InputText from './../form-utils/InputText';

const validate = values => {
  const error = {};
  const fieldToValidate = ['firstName','surName','email', 'password'];
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
class SignUp extends Component {

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

export default reduxForm({
  form: 'signUp-form',
  validate
})(SignUp);

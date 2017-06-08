/**
 *@namespace jobsingle
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import isUrl from 'is-url-superb';

/**
 * @description PropTypes for JobForm
 * @memberOf jobsingle
 * @type {Object}
 */
const propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const validate = values => {
  const error = {};
  const fieldToValidate = ['title', 'URL', 'clientLocation', 'jobLocation'];
  fieldToValidate.forEach((key) => {
    if (!values[key]) {
      error[key] = 'Requried';
    }
  });

  if (values.URL && !isUrl(values.URL)) {
    error.URL = 'Url is not valid';
  }

  return error;
};

/**
 * @class JobForm
 * @memberOf jobsingle.component
 * @extends React.Component
 * @description Render component
 */
class JobForm extends Component {

  handleSu = (data) => {
    console.log('da li handluje');
  }

  /**
   * @description Render Input filed
   * @param {String} input Input type
   * @param {String} label Label string
   * @param {Function | String } touched handler Function for click or touch
   * @param {String} error Error string
   * @param {Object} custom Custom property for text field
   * @return {Object} JSX HTML
   */
  renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      fullWidth={true}
      {...input}
      {...custom}
    />
  );

  /**
   * @description render
   * @memberOf jobsingle.JobForm
   * @return {Object} JSX HTML Content
   */
  render() {

    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <Field
            name="title"
            component={this.renderTextField}
            label="Job Title"
          />
        </div>
        <div>
          <Field
            name="URL"
            component={this.renderTextField}
            label="Job URL"
          />
        </div>
        <div>
          <Field
            name="clientLocation"
            component={this.renderTextField}
            label="Client Location"
          />
        </div>
        <div>
          <Field
            name="jobLocation"
            component={this.renderTextField}
            label="Job location"
          />
        </div>
        <div>
          <Field
            name="comment"
            component={this.renderTextField}
            label="Comment"
            multiLine={true}
          />
        </div>
        <RaisedButton label="Save" type="submit" primary={true}/>
      </form>
    );
  }
}

JobForm.propTypes = propTypes;

JobForm = reduxForm({
  form: 'JobForm', // a unique name for this form
  validate
})(JobForm);

export default JobForm;

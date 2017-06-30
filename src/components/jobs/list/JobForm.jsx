/**
 *@namespace jobsingle
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import isUrl from 'is-url-superb';

import InputText from '../../form-utils/InputText';

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
            component={InputText}
            label="Job Title"
          />
        </div>
        <div>
          <Field
            name="URL"
            component={InputText}
            label="Job URL"
          />
        </div>
        <div>
          <Field
            name="clientLocation"
            component={InputText}
            label="Client Location"
          />
        </div>
        <div>
          <Field
            name="jobLocation"
            component={InputText}
            label="Job location"
          />
        </div>
        <div>
          <Field
            name="comment"
            component={InputText}
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

export default reduxForm({
  form: 'JobForm',
  validate
})(JobForm);


import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired
};

const InputText = ({input, label, meta: {touched, error}, ...custom}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    fullWidth={true}
    {...input}
    {...custom}
  />
);

InputText.propTypes = propTypes;

export default InputText;

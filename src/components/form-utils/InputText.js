import React from 'react';
import TextField from 'material-ui/TextField';

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

export default InputText;

import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  title: PropTypes.string.isRequired
};

/**
 * @function FormHeader
 * @param {Object} props properties
 * @return {XML}
 * @constructor
 */
function FormHeader({title}) {
  return <h2>{title}</h2>;
}

FormHeader.propTypes = propTypes;

export default FormHeader;


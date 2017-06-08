/**
 * @namespace jobslist
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// constant
import {jobsFilter} from './../../../module/jobs/jobs.constant';

// components
import {Tabs, Tab} from 'material-ui/Tabs';

/**
 * @description PropTypes for FilterLink component
 * @memberOf jobslist
 * @type {{onClickFilter: (*)}}
 */
const propTypes = {
  onClickFilter: PropTypes.func.isRequired
};

/**
 * @class FilterLinks
 * @memberOf jobslist
 * @extends React.Component
 * @description Render FilterLinks Header
 */
class FilterLinks extends Component {

  /**
   * @description FilterLinks constructor
   * @constructor
   * @param {Object} props FilterLinks properties
   */
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  /**
   * @description Handle onChange event
   * @param {String} value Filter value
   */
  handleOnChange(value) {
    this.props.onClickFilter(value);
  }

  /**
   * @description render
   * @memberOf jobslist.FilterLinks
   * @return {Object} JSX HTML Content
   */
  render() {
    return (
      <Tabs onChange={this.handleOnChange}>
        <Tab label="&nbsp;All &nbsp;" value={jobsFilter.SHOW_ALL}/>
        <Tab label="&nbsp;Active &nbsp;" value={jobsFilter.SHOW_ACTIVE}/>
        <Tab label="&nbsp;Arhived &nbsp;" value={jobsFilter.SHOW_ARHIVED}/>
      </Tabs>
    );
  }
}

FilterLinks.propTypes = propTypes;

export default FilterLinks;

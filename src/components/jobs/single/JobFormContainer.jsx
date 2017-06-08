/**
 *@namespace jobsingle
 */

import React, {Component} from 'react';

import JobForm from './JobForm';

/**
 * @class JobFormContainer
 * @memberOf jobsingle.component
 * @extends React.Component
 * @description Render component
 */
class JobFormContainer extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log(e);
  }

  /**
   * @description render
   * @memberOf jobsingle.JobFormContainer
   * @return {Object} JSX HTML Content
   */
  render() {
    return (<JobForm onSubmit={this.handleSubmit} />);
  }
}

export default JobFormContainer;

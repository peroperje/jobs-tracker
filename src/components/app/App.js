/**
 * @namespace App
 */

import React, {Component} from 'react';

// component
import JobsListContainer from '../jobs/list/JobsListContainer';
import LogIn from './../auth/LogIn';

/**
 * @class App
 * @memberOf App
 * @extends React.Component
 * @description Render FilterLinks
 */
class App extends Component {

  /**
   * @description render
   * @memberOf App
   * @return {Object} JSX HTML Content
   */
  render() {
    return <JobsListContainer/>;
    //return <LogIn/>;
  }
}

export default App;
